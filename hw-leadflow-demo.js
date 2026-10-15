/* A browser-only port of leadflow-ai/app.py's qualify_lead rules. No backend, storage or messages. */
(() => {
  'use strict';
  function qualify(service, details, urgency) {
    const text = (service + ' ' + details).toLowerCase();
    let score = 45 + ({'ASAP':30,'This week':20,'This month':10}[urgency] || 0);
    const highIntent = ['quote','estimate','book','schedule','repair','replace','install','emergency','today'];
    score += Math.min(25,5*highIntent.filter(phrase => text.includes(phrase)).length);
    score = Math.max(0,Math.min(100,score));
    const priority = score >= 80 ? 'Hot' : score >= 60 ? 'Warm' : 'Normal';
    let summary = priority + ' lead for ' + service + '. Urgency: ' + urgency + '.';
    if (details) summary += ' Customer says: ' + details.trim().replaceAll('\n',' ').slice(0,180);
    const reply = 'Hi Alex, thanks for reaching out about ' + service.toLowerCase() + '. We received your request and can help. The next step is a quick call or appointment so we can confirm the details and give you an accurate quote. What time works best for you?';
    return {score,priority,summary,reply,followupHours:score>=80?2:24};
  }
  window.HyperWumpusLead = {qualify};
  const form = document.querySelector('#lead-demo-form');
  if (!form) return;
  let result = null;
  const followup = () => {
    if (!result) return;
    const status = document.querySelector('#demo-status').value;
    document.querySelector('#demo-followup').textContent = ['Won','Lost'].includes(status) ? 'Closed sample lead. No follow-up queued.' : status === 'Contacted' ? 'Sample status: Contacted. Follow up in 24 hours.' : 'Sample status: ' + status + '. Initial follow-up in ' + result.followupHours + ' hours.';
  };
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    result = qualify(form.elements.service.value.trim(),form.elements.details.value.trim(),form.elements.urgency.value);
    document.querySelector('#demo-score').textContent = String(result.score);
    document.querySelector('#demo-priority').textContent = result.priority;
    document.querySelector('#demo-summary').textContent = result.summary;
    document.querySelector('#demo-response').value = result.reply;
    document.querySelector('#demo-status').value = 'New';
    followup();
  });
  document.querySelector('#demo-status').addEventListener('change',followup);
})();
