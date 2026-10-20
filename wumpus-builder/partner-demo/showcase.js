'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  let program = 'builder', week = 0, day = 0, movement = 0;
  const plan = () => PROGRAMS[program].days;
  let drafts = {}, saved = {}, restEnd = 0, restInterval;
  const key = () => `${program}:${week}:${day}`;
  const rowCount = prescription => Math.min(20, Number(String(prescription ?? '').match(/^(\d+)\s*(?:[×x]|sets)/)?.[1] || 1));
  const ensureDraft = () => drafts[key()] ||= plan()[day].exercises.map(exercise => Array.from({length:rowCount(exercise.weeks[week])}, () => ({weight:'', reps:'', done:false})));
  const countDone = draft => draft.flat().filter(row => row.done).length;
  const countTotal = draft => draft.flat().length;
  const message = text => { $('feedback').textContent = text; };
  const numeric = (value, max, positive = false) => value !== '' && Number.isFinite(Number(value)) && Number(value) >= (positive ? 1 : 0) && Number(value) <= max;
  function showTab(name, focus = false) {
    ['workout','progress','guide','partner'].forEach(id => {
      const selected = id === name;
      $(id+'-tab').setAttribute('aria-selected',String(selected));
      $(id+'-tab').tabIndex = selected ? 0 : -1;
      $(id+'-panel').hidden = !selected;
    });
    if (name === 'progress') renderProgress();
    if (name === 'guide') $('guide-program').textContent = `${PROGRAMS[program].name} · ${PROGRAMS[program].goal}. Follow your enrolled program and the official team’s guidance.`;
    message('');
    if (focus) $(name+'-tab').focus();
  }
  function renderWorkout() {
    const exercises = plan()[day].exercises;
    stopRest();
    $('lesson').hidden = !exercises.length;
    $('rest').hidden = !exercises.length;
    $('rest-guidance').textContent = '';
    $('unit').textContent = 'WEIGHT IN LB · OPTIONAL';
    $('exercise').innerHTML = exercises.map((item, index) => `<option value="${index}">${escape(item.name)}</option>`).join('');
    $('exercise').value = String(movement);
    $('exercise').disabled = !exercises.length;
    $('save').disabled = !exercises.length;
    $('previous').disabled = !exercises.length || movement === 0;
    $('next').disabled = !exercises.length || movement === exercises.length - 1;
    if (!exercises.length) {
      $('exercise-position').textContent = 'RECOVERY DAY';
      $('prescription').textContent = 'Rest & recover';
      $('exercise-note').textContent = 'No prescribed exercises today. Your previous sessions are on Progress.';
      $('sets').innerHTML = '';
      $('set-summary').textContent = 'No workout to log';
      document.querySelector('.set-head').hidden = true;
      return;
    }
    document.querySelector('.set-head').hidden = false;
    const exercise = exercises[movement];
    $('exercise-position').textContent = `MOVEMENT ${movement+1} OF ${exercises.length}`;
    $('prescription').textContent = exercise.weeks[week] || 'Prescription unspecified';
    $('exercise-note').textContent = [exercise.note, !exercise.weeks[week] ? 'Confirm the missing prescription with the program team before training.' : ''].filter(Boolean).join(' ');
    const timed = exercise.mode === 'time';
    const guided = exercise.mode === 'guided';
    $('unit').textContent = guided ? 'FOLLOW THE OFFICIAL VIDEO' : timed ? 'LOG TIME IN SECONDS' : 'WEIGHT IN LB · OPTIONAL';
    $('lesson').href = exercise.videoId ? `https://www.youtube.com/watch?v=${encodeURIComponent(exercise.videoId)}` : 'https://bootcamp.buckedup.com/dashboard/';
    $('lesson').textContent = exercise.videoId ? (guided ? 'Open official follow-along video ↗' : 'Watch official demonstration ↗') : 'Open official workout ↗';
    $('rest-guidance').textContent = exercise.rest && exercise.rest !== 'N/A' ? `Official rest: ${exercise.rest}.${/\d/.test(exercise.rest)?' Timer uses the lower end of a range.':''}` : '';
    $('rest').hidden = !/\d/.test(exercise.rest);
    stopRest();
    document.querySelector('.set-head').hidden = guided;
    if (guided) {
      const row=ensureDraft()[movement][0];
      $('sets').innerHTML = `<label class="guided-completion"><input type="checkbox" ${row.done?'checked':''} aria-label="Guided activity completed" data-index="0" data-field="done"> I completed this guided activity</label>`;
      updateCount(); return;
    }
    const repLabel = timed ? 'Seconds' : 'Reps';
    document.querySelector('.set-head span:nth-child(3)').textContent = timed ? 'SECONDS' : 'REPS';
    $('sets').innerHTML = ensureDraft()[movement].map((row,index) => `<div class="set-row"><span class="set-index">${index+1}</span><input type="number" inputmode="decimal" min="0" max="3000" step="0.5" value="${escape(row.weight)}" ${timed?'disabled':''} placeholder="—" aria-label="Set ${index+1} weight in pounds" data-index="${index}" data-field="weight"><input type="number" inputmode="numeric" min="1" max="10000" step="1" value="${escape(row.reps)}" placeholder="—" aria-label="Set ${index+1} ${repLabel.toLowerCase()}" data-index="${index}" data-field="reps"><label class="done-target"><input type="checkbox" ${row.done?'checked':''} aria-label="Set ${index+1} done" data-index="${index}" data-field="done"></label></div>`).join('');
    updateCount();
  }
  function updateCount() {
    const draft = ensureDraft();
    $('set-summary').textContent = `${countDone(draft)} / ${countTotal(draft)} sets / activities checked`;
  }
  function renderProgress() {
    const sessions = Object.values(saved).filter(session => session.program === program).sort((a,b) => b.order-a.order);
    $('saved-count').textContent = String(sessions.length);
    $('history').innerHTML = sessions.length ? sessions.map(session => `<p><strong>${escape(session.name)}</strong><br><small>Week ${session.week+1} · ${session.done} / ${session.total} sets / activities · ${session.done===session.total?'All listed sets logged':'Partial session saved'}</small></p>`).join('') : '<p>No sessions yet. Log a sample set in Workout, then save the session.</p>';
  }
  const restSeconds = () => Number(plan()[day].exercises[movement]?.rest?.match(/\d+/)?.[0] || 0);
  function stopRest() {
    clearInterval(restInterval); restEnd = 0;
    const seconds=restSeconds();
    $('rest').textContent = `${seconds}s rest`;
    $('rest').setAttribute('aria-label',`Start ${seconds} second rest timer`);
  }
  function reset() {
    stopRest(); drafts = {}; saved = {}; program = 'builder'; week = 0; day = 0; movement = 0;
    $('program').value=program; renderProgram();
    $('week').value = '0'; $('day').value = '0';
    showTab('workout'); renderWorkout(); renderProgress(); message('Demo reset. Your original tracker is untouched.');
  }
  $('week').innerHTML = Array.from({length:8},(_,i) => `<option value="${i}">Week ${i+1}</option>`).join('');
  function renderProgram() {
    $('day').innerHTML = plan().map((item,i) => `<option value="${i}">Day ${i+1} · ${escape(item.name)}</option>`).join('');
    $('day').value=String(day);
    $('program-goal').textContent=PROGRAMS[program].goal;
  }
  $('program').innerHTML=Object.entries(PROGRAMS).map(([id,p])=>`<option value="${id}">${escape(p.name)}</option>`).join('');
  $('program').addEventListener('change',event=>{stopRest();program=event.target.value;day=0;movement=0;renderProgram();showTab('workout');renderWorkout();});
  $('week').addEventListener('change',event => {week = Number(event.target.value); movement=0; stopRest(); renderWorkout(); message('');});
  $('day').addEventListener('change',event => {day = Number(event.target.value); movement=0; stopRest(); renderWorkout(); message('');});
  $('exercise').addEventListener('change',event => {movement = Number(event.target.value); renderWorkout(); message('');});
  $('previous').addEventListener('click',() => { if (movement > 0) {movement--;renderWorkout();message('');}});
  $('next').addEventListener('click',() => { if (movement < plan()[day].exercises.length-1) {movement++;renderWorkout();message('');}});
  $('sets').addEventListener('input',event => {
    const {index,field} = event.target.dataset;
    if (field !== 'weight' && field !== 'reps') return;
    const row = ensureDraft()[movement][Number(index)];
    row[field] = event.target.value;
    if (row.done) {
      row.done = false;
      const checkbox = event.target.closest('.set-row').querySelector('[type="checkbox"]');
      checkbox.checked = false;
      updateCount(); message('Value changed. Check this set again when ready.');
    }
  });
  $('sets').addEventListener('change',event => {
    const {index,field} = event.target.dataset;
    if (field !== 'done') return;
    const row = ensureDraft()[movement][Number(index)];
    if (plan()[day].exercises[movement].mode === 'guided') {row.done=event.target.checked;updateCount();message('');return;}
    if (event.target.checked && (!numeric(row.reps,10000,true) || !Number.isInteger(Number(row.reps)) || (row.weight!=='' && !numeric(row.weight,3000)))) {
      event.target.checked=false; row.done=false;
      message('Enter positive whole reps or seconds and an optional weight from 0 to 3,000 lb before checking this set.');
    } else {row.done=event.target.checked; message('');}
    updateCount();
  });
  $('save').addEventListener('click',() => {
    const draft = ensureDraft();
    const done = countDone(draft), total=countTotal(draft);
    if (!done) {message('Log and check at least one set before saving. A partial session is okay.');return;}
    saved[key()] = {program,name:plan()[day].name,week,day,done,total,order:Date.now()};
    showTab('progress'); message(`${done===total?'Session':'Partial session'} saved in this demo. Reloading clears these entries.`);
  });
  const modes=['workout','progress','guide','partner'];
  modes.forEach((name,index) => {
    $(name+'-tab').addEventListener('click',() => showTab(name));
    $(name+'-tab').addEventListener('keydown',event => {
      let destination;
      if (event.key==='ArrowRight') destination=modes[(index+1)%modes.length];
      if (event.key==='ArrowLeft') destination=modes[(index+modes.length-1)%modes.length];
      if (event.key==='Home') destination=modes[0];
      if (event.key==='End') destination=modes[modes.length-1];
      if (destination) {event.preventDefault();showTab(destination,true);}
    });
  });
  $('back-to-workout').addEventListener('click',() => showTab('workout',true));
  $('try-demo').addEventListener('click',() => {showTab('workout');$('experience').focus({preventScroll:true});});
  $('reset').addEventListener('click',reset);
  $('rest').addEventListener('click',() => {
    if(restEnd) {stopRest();return;}
    restEnd = Date.now()+restSeconds()*1000;
    const tick = () => {
      const left=Math.max(0,Math.ceil((restEnd-Date.now())/1000));
      $('rest').textContent = `${Math.floor(left/60)}:${String(left%60).padStart(2,'0')} · stop`;
      $('rest').setAttribute('aria-label','Stop rest timer');
      if (!left) {stopRest();message('Rest timer finished.');}
    };
    tick();restInterval=setInterval(tick,250);
  });
  document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click',() => $(button.dataset.open).showModal()));
  document.querySelectorAll('dialog .close').forEach(button => button.addEventListener('click',() => button.closest('dialog').close()));
  const currency = value => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(value);
  function calculate() {
    const ids = ['participants','lift','contribution','pilot-cost'];
    const valid = ids.every(id => $(id).value !== '' && $(id).checkValidity());
    if (!valid) {
      ['extra-orders','added-profit','net-profit'].forEach(id => $(id).textContent='—');
      $('break-even').textContent='Enter valid assumptions in every field to calculate.';return;
    }
    const [participants,lift,contribution,cost] = ids.map(id => Number($(id).value));
    const orders=participants*lift/100, added=orders*contribution;
    $('extra-orders').textContent=new Intl.NumberFormat('en-US',{maximumFractionDigits:1}).format(orders);
    $('added-profit').textContent=currency(added);
    $('net-profit').textContent=currency(added-cost);
    const needed=cost===0?0:(contribution?Math.ceil(cost/contribution):Infinity);
    const requiredLift=needed/participants*100;
    $('break-even').textContent=!contribution && cost ? 'No break-even is possible with $0 contribution per order.' : needed > participants ? `Break-even would need ${needed.toLocaleString()} extra purchasers, more than this cohort can supply under the one-order assumption.` : `Break-even: ${Number.isFinite(needed)?needed.toLocaleString():0} extra purchasers (${Number.isFinite(requiredLift)?requiredLift.toFixed(1):'0.0'} percentage points), before hosting and support.`;
  }
  ['participants','lift','contribution','pilot-cost'].forEach(id => $(id).addEventListener('input',calculate));
  reset();message('');calculate();
})();
