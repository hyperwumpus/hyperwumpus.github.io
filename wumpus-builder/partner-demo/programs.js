/* Iron Harvest 2026 program preview. Targets: official training PDFs; rest/media: portal, reviewed 2026-10-20. Coach approval required before a pilot. */
const PROGRAMS = {
  "builder": {
    "name": "BAMF Builder",
    "goal": "Build muscle",
    "days": [
      {
        "name": "Chest & Triceps",
        "exercises": [
          {
            "name": "Push Ups",
            "weeks": [
              "3 × 10-15",
              "3 × 10-15",
              "3 × 15",
              "3 × 15",
              "3 × 20",
              "3 × 20-25",
              "3 × 20+",
              "3 × to failure"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "AsopIeJvSDs",
            "note": ""
          },
          {
            "name": "Machine/Cable Chest Fly",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 12",
              "4 × 12"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "pf4mu--teUI",
            "note": ""
          },
          {
            "name": "Barbell Bench Press",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "JJFTqklppZk",
            "note": ""
          },
          {
            "name": "Barbell Incline Bench Press",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "s7ecd_W1Y7g",
            "note": ""
          },
          {
            "name": "Low Cable Single Arm Chest Fly",
            "weeks": [
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "_SDwSpkhRmE",
            "note": ""
          },
          {
            "name": "Dumbbell Chest Pull Overs",
            "weeks": [
              "3 × 8-10",
              "3 × 8-10",
              "3 × 8-10",
              "3 × 8-10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "2uYAbkx6HsQ",
            "note": ""
          },
          {
            "name": "Tricep Overhead with Cable",
            "weeks": [
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-failure"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "tsEWSJrPWq0",
            "note": ""
          },
          {
            "name": "Tricep Rope Push Down",
            "weeks": [
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "6-zOSIugjtY",
            "note": "Drop-set instructions differ between PDF and portal. Confirm the intended drop sequence with the coach."
          },
          {
            "name": "Dumbbell Tricep Extension",
            "weeks": [
              "3 × 8-10",
              "3 × 8-10",
              "3 × 8-10",
              "3 × 8-10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10-failure"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "bPKoMg0Gpfk",
            "note": ""
          },
          {
            "name": "Diamond Push Ups",
            "weeks": [
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "JKymZDwJmR0",
            "note": ""
          }
        ]
      },
      {
        "name": "Legs #1",
        "exercises": [
          {
            "name": "Lower Body General warm up",
            "weeks": [
              "10-15 reps each",
              "10-15 reps each",
              "10-15 reps each",
              "10-15 reps each",
              "10-15 reps each",
              "10-15 reps each",
              "10-15 reps each",
              "10-15 reps each"
            ],
            "mode": "guided",
            "rest": "",
            "videoId": "eQzoZFK2gB8",
            "note": ""
          },
          {
            "name": "Single Leg Extensions",
            "weeks": [
              "3 × 8-10",
              "3 × 8-10",
              "3 × 10",
              "3 × 10",
              "4 × 8-10",
              "4 × 8-10",
              "4 × 10",
              "4 × 10"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "1rFXzZ2jwfA",
            "note": ""
          },
          {
            "name": "Single Leg Hamstring Curls",
            "weeks": [
              "3 × 8-10",
              "3 × 8-10",
              "3 × 10",
              "3 × 10",
              "4 × 8-10",
              "4 × 8-10",
              "4 × 10",
              "4 × 10"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "Zx3cOs2d-5Y",
            "note": ""
          },
          {
            "name": "Front Squat",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "lokJ3iz1vfY",
            "note": ""
          },
          {
            "name": "Leg Press Feet Close Together",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "FjFaHLVRRUw",
            "note": ""
          },
          {
            "name": "Single Leg Press",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "FX2uf4onnjA",
            "note": ""
          },
          {
            "name": "Smiths Machine Lunges",
            "weeks": [
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "4 × 10-15",
              "4 × 10-15",
              "4 × 10-15",
              "4 × 10-15"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "VSX0byCvn4o",
            "note": ""
          },
          {
            "name": "Box Step Ups",
            "weeks": [
              "3 × 10 each leg",
              "3 × 10 each leg",
              "3 × 10 each leg",
              "3 × 10 each leg",
              "3 × 10 each leg",
              "3 × 10 each leg",
              "3 × 10 each leg",
              "3 × 10 each leg"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "-kZDQnOCZuA",
            "note": ""
          },
          {
            "name": "Seated Calf Raises",
            "weeks": [
              "4 × 20",
              "4 × 20",
              "4 × 20",
              "4 × 20",
              "4 × 20",
              "4 × 20",
              "4 × 20",
              "4 × 20"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "5CGTJ7ba5ec",
            "note": ""
          },
          {
            "name": "Decline Sit Ups",
            "weeks": [
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "25QLDww2f3Y",
            "note": ""
          }
        ]
      },
      {
        "name": "Shoulders #1",
        "exercises": [
          {
            "name": "Upper Body Warm Up",
            "weeks": [
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes"
            ],
            "mode": "time",
            "rest": "45 sec",
            "videoId": "RN0ijKeTPj4",
            "note": ""
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-15",
              "4 × 15",
              "4 × 15",
              "4 × 15"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "EEzk2of5Xtc",
            "note": ""
          },
          {
            "name": "Rear Delt Fly Machine",
            "weeks": [
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "-BOZ8KCn4ew",
            "note": "Portal instructs dropping the weight twice in each set."
          },
          {
            "name": "Bent Over Rear Delt Fly",
            "weeks": [
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "IcVyRxqM4ys",
            "note": ""
          },
          {
            "name": "Dumbbell Lateral Raises",
            "weeks": [
              "3 × 8-10",
              "3 × 8-10",
              "3 × 8-10",
              "3 × 10",
              "3 × 10",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 15"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "BunCNByK9fI",
            "note": ""
          },
          {
            "name": "Dumbbell Upright Rows",
            "weeks": [
              "3 × 8-10",
              "3 × 8-10",
              "3 × 8-10",
              "3 × 10",
              "4 × 10-15",
              "4 × 10-15",
              "4 × 10-15",
              "4 × 10-15"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "9wkUFk7C2VM",
            "note": ""
          },
          {
            "name": "Dumbbell Single Arm Front Raises",
            "weeks": [
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "lDx5g0hpE2A",
            "note": ""
          },
          {
            "name": "Ball Crunches",
            "weeks": [
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "n5xLiv8p4xA",
            "note": ""
          },
          {
            "name": "Hanging Leg Raises",
            "weeks": [
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "Hp0pxVJY-nc",
            "note": ""
          }
        ]
      },
      {
        "name": "Back Attack & Biceps",
        "exercises": [
          {
            "name": "Upper Body Mobility 1 + 2",
            "weeks": [
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes"
            ],
            "mode": "time",
            "rest": "",
            "videoId": "ruwOViNtW2w",
            "note": ""
          },
          {
            "name": "Rope Attachment Row",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-15",
              "4 × 10-15",
              "4 × 10-15",
              "4 × 10-15"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "tIorN4Zou0w",
            "note": ""
          },
          {
            "name": "Barbell Bent Over Rows",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-15",
              "4 × 10-15",
              "4 × 10-15",
              "4 × 10-15"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "xWroPxK6T-I",
            "note": ""
          },
          {
            "name": "Pull Ups",
            "weeks": [
              "3 × 8-10",
              "3 × 8-10",
              "3 × 8-10",
              "3 × 8-10",
              "4 × 8-10",
              "4 × 8-10",
              "4 × 8-10",
              "4 × 8-10"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "6zdy2KTnsU4",
            "note": ""
          },
          {
            "name": "Lat Pull Overs",
            "weeks": [
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10-15",
              "3 × 10-15",
              "4 × 10-15",
              "4 × 10-15"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "YPZrjsmXdT4",
            "note": ""
          },
          {
            "name": "Seated Lat Pull Downs",
            "weeks": [
              "3 × 8-10",
              "3 × 8-10",
              "3 × 8-10",
              "3 × 10",
              "3 × 10",
              "3 × 10-15",
              "4 × 10-15",
              "4 × 10-15"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "dNswxU71Nds",
            "note": ""
          },
          {
            "name": "A1: EZ Bar Preacher Curl",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "dEYGilw02-k",
            "note": ""
          },
          {
            "name": "Dumbbell Hammer Curls",
            "weeks": [
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "4 × 10-15",
              "4 × 10-15",
              "4 × 10-15",
              "4 × 10-15"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "C3yex7aOWxE",
            "note": ""
          },
          {
            "name": "Cable Single Arm D Ring Curl",
            "weeks": [
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "39mhzpzVDH0",
            "note": ""
          },
          {
            "name": "Roman Chair Lifts",
            "weeks": [
              "4 × to failure",
              "4 × to failure",
              "4 × to failure",
              "4 × to failure",
              "4 × to failure",
              "4 × to failure",
              "4 × to failure",
              "4 × to failure"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "UP1GpSUnIxE",
            "note": ""
          },
          {
            "name": "Weighted Back Extension",
            "weeks": [
              "3 × 10-20",
              "3 × 10-20",
              "3 × 10-20",
              "3 × 10-20",
              "4 × 10-20",
              "4 × 10-20",
              "4 × 10-20",
              "4 × 10-20"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "n66B7GkHnsM",
            "note": ""
          }
        ]
      },
      {
        "name": "Leg Day #2",
        "exercises": [
          {
            "name": "Lower Body General warm up",
            "weeks": [
              "10-15 reps each",
              "10-15 reps each",
              "10-15 reps each",
              "10-15 reps each",
              "10-15 reps each",
              "10-15 reps each",
              "10-15 reps each",
              "10-15 reps each"
            ],
            "mode": "guided",
            "rest": "",
            "videoId": "eQzoZFK2gB8",
            "note": ""
          },
          {
            "name": "Leg Extension Machine",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "Q1GkB16Qe7E",
            "note": ""
          },
          {
            "name": "Seated Machine Leg Hamstring Curls",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "SIHpcRiRrBs",
            "note": ""
          },
          {
            "name": "Barbell Back Squat",
            "weeks": [
              "4 × 10-15",
              "4 × 10-15",
              "4 × 10-15",
              "4 × 10-15",
              "4 × 15-20",
              "4 × 15-20",
              "4 × 15-20",
              "4 × 15-20"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "uUXaGonkyDE",
            "note": ""
          },
          {
            "name": "Dumbbell Walking Lunges",
            "weeks": [
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 15-20",
              "3 × 15-20",
              "3 × 15-20",
              "3 × 15-20"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "AW3S7KQAI8A",
            "note": ""
          },
          {
            "name": "Wide Stance Leg Press",
            "weeks": [
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "H641KQp1RV0",
            "note": ""
          },
          {
            "name": "Barbell Deadlifts",
            "weeks": [
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "LTX10gaIYl8",
            "note": ""
          },
          {
            "name": "Barbell Hip Thrusts",
            "weeks": [
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "pCdz2T8KhQw",
            "note": ""
          },
          {
            "name": "Roman Chair Lifts",
            "weeks": [
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "UP1GpSUnIxE",
            "note": ""
          }
        ]
      },
      {
        "name": "Shoulders #2",
        "exercises": [
          {
            "name": "Resistance Band Rear Delt Warm Up",
            "weeks": [
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes"
            ],
            "mode": "time",
            "rest": "",
            "videoId": "tMBeHVxFK4Y",
            "note": ""
          },
          {
            "name": "ITY's",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "9wu6NUrPsA0",
            "note": ""
          },
          {
            "name": "Arnold Presses",
            "weeks": [
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "HPMgUWDZAbg",
            "note": ""
          },
          {
            "name": "Reverse Cable Fly",
            "weeks": [
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "iIuk9ZG1xy4",
            "note": ""
          },
          {
            "name": "Cable D Ring Lateral Raises",
            "weeks": [
              "3 × 8-10",
              "3 × 8-10",
              "3 × 8-10",
              "3 × 8-10",
              "3 × 10",
              "3 × 10",
              "3 × 10-12",
              "3 × 10-12"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "1Rnr9zVFHpo",
            "note": ""
          },
          {
            "name": "Face Pulls",
            "weeks": [
              "3 × 8-10",
              "3 × 8-10",
              "3 × 8-10",
              "3 × 8-10",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "G-1f56JJqn8",
            "note": ""
          },
          {
            "name": "Barbell Upright Rows",
            "weeks": [
              "4 × 8-10",
              "4 × 8-10",
              "4 × 8-10",
              "4 × 8-10",
              "4 × 8-10",
              "4 × 8-10",
              "4 × 8-10",
              "4 × 8-10"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "JRLPCj7PUGo",
            "note": ""
          },
          {
            "name": "Planks",
            "weeks": [
              "3 × 1 minute",
              "3 × 1 minute",
              "3 × 1 minute",
              "3 × 1 minute",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure"
            ],
            "mode": "time",
            "rest": "60 sec",
            "videoId": "Oa4ds1xDkZg",
            "note": ""
          },
          {
            "name": "Decline Sit Ups",
            "weeks": [
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure",
              "3 × to failure"
            ],
            "mode": "reps",
            "rest": "45 sec",
            "videoId": "25QLDww2f3Y",
            "note": ""
          }
        ]
      },
      {
        "name": "Rest/ Recovery",
        "exercises": []
      }
    ]
  },
  "burn": {
    "name": "LFG Burn",
    "goal": "Lose weight",
    "days": [
      {
        "name": "Chest, Shoulders & Triceps",
        "exercises": [
          {
            "name": "Warm Up Cardio",
            "weeks": [
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "foehwvettmQ",
            "note": ""
          },
          {
            "name": "Upper Body Warm Up",
            "weeks": [
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video"
            ],
            "mode": "guided",
            "rest": "N/A",
            "videoId": "RN0ijKeTPj4",
            "note": ""
          },
          {
            "name": "Barbell Bench Press",
            "weeks": [
              "4 sets: 16, 12, 10, 8 reps",
              "4 sets: 16, 12, 10, 8 reps",
              "4 sets: 16, 12, 10, 8 reps",
              "4 sets: 16, 12, 10, 8 reps",
              "4 sets: 16, 12, 10, 8 reps",
              "4 sets: 16, 12, 10, 8 reps",
              "4 sets: 16, 12, 10, 8 reps",
              "4 sets: 16, 12, 10, 8 reps"
            ],
            "mode": "reps",
            "rest": "60-120 seconds",
            "videoId": "JJFTqklppZk",
            "note": ""
          },
          {
            "name": "A1: Dumbbell Incline Hex Press",
            "weeks": [
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "4 × 12-16",
              "4 × 12-16",
              "4 × 12-16",
              "4 × 12-16"
            ],
            "mode": "reps",
            "rest": "Next Exercise",
            "videoId": "r9V_hl_5378",
            "note": ""
          },
          {
            "name": "A2: Dumbbell Skull Crushers",
            "weeks": [
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "4 × 12-16",
              "4 × 12-16",
              "4 × 12-16",
              "4 × 12-16"
            ],
            "mode": "reps",
            "rest": "Next Exercise",
            "videoId": "9RxzR68fAdM",
            "note": ""
          },
          {
            "name": "A3: Dumbbell Lateral Raises",
            "weeks": [
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12"
            ],
            "mode": "reps",
            "rest": "60-90 seconds; Move back to A1",
            "videoId": "BunCNByK9fI",
            "note": ""
          },
          {
            "name": "Assisted Machine Dips/Bench Dips",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "60 seconds",
            "videoId": "Z2Ew9FAUmu8",
            "note": ""
          },
          {
            "name": "Dumbbell Flat Bench Chest Flys",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "60 seconds",
            "videoId": "p4S5Vf7trTQ",
            "note": ""
          },
          {
            "name": "Standing Barbell Press",
            "weeks": [
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "4 × 12-16",
              "4 × 12-16",
              "4 × 12-16",
              "4 × 12-16"
            ],
            "mode": "reps",
            "rest": "90 seconds",
            "videoId": "u0Qh2hD2Eug",
            "note": ""
          },
          {
            "name": "Cardio of Choice",
            "weeks": [
              "20 minutes",
              "20 minutes",
              "20 minutes",
              "20 minutes",
              "30 minutes",
              "30 minutes",
              "30 minutes",
              "30 minutes"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "foehwvettmQ",
            "note": ""
          },
          {
            "name": "Foam Roll Each Body Part",
            "weeks": [
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video"
            ],
            "mode": "guided",
            "rest": "N/A",
            "videoId": "fAuTCGNyNPA",
            "note": ""
          }
        ]
      },
      {
        "name": "Quadriceps, Hamstrings & Glutes",
        "exercises": [
          {
            "name": "Warm Up Cardio",
            "weeks": [
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "foehwvettmQ",
            "note": ""
          },
          {
            "name": "Lower Body General warm up",
            "weeks": [
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video"
            ],
            "mode": "guided",
            "rest": "N/A",
            "videoId": "eQzoZFK2gB8",
            "note": ""
          },
          {
            "name": "Barbell Back Squat",
            "weeks": [
              "4 sets: 16, 12, 10, 8 reps",
              "4 sets: 16, 12, 10, 8 reps",
              "4 sets: 16, 12, 10, 8 reps",
              "4 sets: 16, 12, 10, 8 reps",
              "4 sets: 16, 12, 10, 8 reps",
              "4 sets: 16, 12, 10, 8 reps",
              "4 sets: 16, 12, 10, 8 reps",
              "4 sets: 16, 12, 10, 8 reps"
            ],
            "mode": "reps",
            "rest": "90-120 seconds",
            "videoId": "uUXaGonkyDE",
            "note": ""
          },
          {
            "name": "A1: Dumbbell Step Ups",
            "weeks": [
              "3 × 10-12 each leg",
              "3 × 10-12 each leg",
              "3 × 10-12 each leg",
              "3 × 10-12 each leg",
              "4 × 10-12 each leg",
              "4 × 10-12 each leg",
              "4 × 10-12 each leg",
              "4 × 10-12 each leg"
            ],
            "mode": "reps",
            "rest": "Next Exercise",
            "videoId": "NBHEX1lJ_Yw",
            "note": ""
          },
          {
            "name": "A2: Kettlebell Swings",
            "weeks": [
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10"
            ],
            "mode": "reps",
            "rest": "Next Exercise",
            "videoId": "uznAywkpl7s",
            "note": ""
          },
          {
            "name": "A3: Dumbbell RDL",
            "weeks": [
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "4 × 12-16",
              "4 × 12-16",
              "4 × 12-16",
              "4 × 12-16"
            ],
            "mode": "reps",
            "rest": "60 seconds; Move back to A1",
            "videoId": "LaBV8upNiBM",
            "note": ""
          },
          {
            "name": "Bulgarian Split Squats",
            "weeks": [
              "3 × 10 each leg",
              "3 × 10 each leg",
              "3 × 10 each leg",
              "3 × 10 each leg",
              "4 × 10 each leg",
              "4 × 10 each leg",
              "4 × 10 each leg",
              "4 × 10 each leg"
            ],
            "mode": "reps",
            "rest": "60 seconds",
            "videoId": "tpGRUWqFeho",
            "note": ""
          },
          {
            "name": "Seated Machine Leg Hamstring Curls",
            "weeks": [
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "4 × 12-16",
              "4 × 12-16",
              "4 × 12-16",
              "4 × 12-16"
            ],
            "mode": "reps",
            "rest": "60 seconds",
            "videoId": "SIHpcRiRrBs",
            "note": ""
          },
          {
            "name": "Seated Calf Raises",
            "weeks": [
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "4 × 12-16",
              "4 × 12-16",
              "4 × 12-16",
              "4 × 12-16"
            ],
            "mode": "reps",
            "rest": "45 seconds",
            "videoId": "5CGTJ7ba5ec",
            "note": ""
          },
          {
            "name": "Planks",
            "weeks": [
              "3 × 60-90 seconds",
              "3 × 60-90 seconds",
              "3 × 60-90 seconds",
              "3 × 60-90 seconds",
              "3 × 60-90 seconds",
              "3 × 60-90 seconds",
              "3 × 60-90 seconds",
              "3 × 60-90 seconds"
            ],
            "mode": "time",
            "rest": "45 seconds",
            "videoId": "Oa4ds1xDkZg",
            "note": ""
          },
          {
            "name": "Medicine Ball Hamstring Curls",
            "weeks": [
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "3 × 10-15",
              "4 × 10-15",
              "4 × 10-15",
              "4 × 10-15",
              "4 × 10-15"
            ],
            "mode": "reps",
            "rest": "30 seconds",
            "videoId": "s8zMvEcdOow",
            "note": ""
          },
          {
            "name": "Scissor / Flutter Kicks",
            "weeks": [
              "3 × 20 each way",
              "3 × 20 each way",
              "3 × 20 each way",
              "3 × 20 each way",
              "4 × 20 each way",
              "4 × 20 each way",
              "4 × 20 each way",
              "4 × 20 each way"
            ],
            "mode": "reps",
            "rest": "60 seconds",
            "videoId": "c2hWoiqbS5g",
            "note": ""
          }
        ]
      },
      {
        "name": "Back & Biceps",
        "exercises": [
          {
            "name": "Warm Up Cardio",
            "weeks": [
              "10 minutes",
              "10 minutes",
              "10 minutes",
              "10 minutes",
              "10 minutes",
              "10 minutes",
              "10 minutes",
              "10 minutes"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "foehwvettmQ",
            "note": ""
          },
          {
            "name": "Upper Body Warm Up",
            "weeks": [
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video"
            ],
            "mode": "guided",
            "rest": "N/A",
            "videoId": "RN0ijKeTPj4",
            "note": ""
          },
          {
            "name": "Assisted Reverse Grip Pull Ups",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "erju9xb-VUU",
            "note": ""
          },
          {
            "name": "A1: Alternating Dumbbell Curls",
            "weeks": [
              "3 × 8 each arm",
              "3 × 8 each arm",
              "3 × 8 each arm",
              "3 × 8 each arm",
              "4 × 8 each arm",
              "4 × 8 each arm",
              "4 × 8 each arm",
              "4 × 8 each arm"
            ],
            "mode": "reps",
            "rest": "Next Exercise",
            "videoId": "ADUq9wnUNtU",
            "note": ""
          },
          {
            "name": "A2: Barbell Bent Over Rows",
            "weeks": [
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12"
            ],
            "mode": "reps",
            "rest": "Next Exercise",
            "videoId": "xWroPxK6T-I",
            "note": ""
          },
          {
            "name": "A3: Dumbbell Hammer Curls",
            "weeks": [
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12"
            ],
            "mode": "reps",
            "rest": "60-90 seconds; move back to A1",
            "videoId": "C3yex7aOWxE",
            "note": ""
          },
          {
            "name": "Wide Grip Lat Pull Down",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "60 seconds",
            "videoId": "vNSAYrWTGB4",
            "note": ""
          },
          {
            "name": "Barbell Bicep Curl",
            "weeks": [
              "3 × 8-12",
              "3 × 8-12",
              "3 × 8-12",
              "3 × 8-12",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12"
            ],
            "mode": "reps",
            "rest": "60 seconds",
            "videoId": "cVcDYeEAacs",
            "note": ""
          },
          {
            "name": "Neutral Grip Pull Downs",
            "weeks": [
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12"
            ],
            "mode": "reps",
            "rest": "60 seconds",
            "videoId": "Svd22Fb2Zv0",
            "note": ""
          },
          {
            "name": "Decline Sit Ups",
            "weeks": [
              "2 × 10",
              "2 × 10",
              "2 × 10",
              "2 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10"
            ],
            "mode": "reps",
            "rest": "30 seconds",
            "videoId": "25QLDww2f3Y",
            "note": ""
          },
          {
            "name": "Leg Lifts Over Dumbbell",
            "weeks": [
              "2 × 10 each way",
              "2 × 10 each way",
              "2 × 10 each way",
              "2 × 10 each way",
              "3 × 10 each way",
              "3 × 10 each way",
              "3 × 10 each way",
              "3 × 10 each way"
            ],
            "mode": "reps",
            "rest": "30 seconds",
            "videoId": "4_YlyVDYIVU",
            "note": ""
          }
        ]
      },
      {
        "name": "HIIT Cardio & Mobility",
        "exercises": [
          {
            "name": "Warm Up Cardio",
            "weeks": [
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "foehwvettmQ",
            "note": ""
          },
          {
            "name": "Lower Body Active Warm Up",
            "weeks": [
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video"
            ],
            "mode": "guided",
            "rest": "N/A",
            "videoId": "WzrIqnI__EE",
            "note": ""
          },
          {
            "name": "HIIT Cardio",
            "weeks": [
              "3 × 10 minutes",
              "3 × 10 minutes",
              "3 × 10 minutes",
              "3 × 10 minutes",
              "4 × 10 minutes",
              "4 × 10 minutes",
              "4 × 10 minutes",
              "4 × 10 minutes"
            ],
            "mode": "time",
            "rest": "See Video Description",
            "videoId": "0QczzoJwMKU",
            "note": "Each 10-minute block: five minutes high-to-moderate effort, then five minutes slow. Follow the official demonstration."
          },
          {
            "name": "Foam Roll Each Body Part",
            "weeks": [
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video"
            ],
            "mode": "guided",
            "rest": "N/A",
            "videoId": "fAuTCGNyNPA",
            "note": ""
          },
          {
            "name": "Dynamic Toe Touches",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "Next Movement",
            "videoId": "okCO8yEyNqc",
            "note": ""
          },
          {
            "name": "Dynamic Piriformis Stretch",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "Next Movement",
            "videoId": "B7uT1PEAlPI",
            "note": ""
          },
          {
            "name": "Dynamic Pigeon Glute Stretch",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "Next Movement",
            "videoId": "vytOCMdfJAE",
            "note": ""
          },
          {
            "name": "Dynamic Hip Flexor Stretch",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "Next movement",
            "videoId": "mE9pxMQHtwA",
            "note": ""
          },
          {
            "name": "Dynamic Hamstring Stretch",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "Next Movement",
            "videoId": "QQpdWSrdi-M",
            "note": ""
          },
          {
            "name": "Dynamic Calf Stretch",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "Next Movement",
            "videoId": "aWifQb0w2jk",
            "note": ""
          },
          {
            "name": "Dowell Around the Worlds",
            "weeks": [
              "15 seconds each way",
              "15 seconds each way",
              "15 seconds each way",
              "15 seconds each way",
              "15 seconds each way",
              "15 seconds each way",
              "15 seconds each way",
              "15 seconds each way"
            ],
            "mode": "time",
            "rest": "Next Movement",
            "videoId": "AbnaQ74HMb8",
            "note": ""
          },
          {
            "name": "Static Lat Stretch",
            "weeks": [
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm"
            ],
            "mode": "time",
            "rest": "Next Movement",
            "videoId": "B11mipKUZuY",
            "note": ""
          },
          {
            "name": "Static Tricep Stretch",
            "weeks": [
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm"
            ],
            "mode": "time",
            "rest": "Done",
            "videoId": "JezxtZBXIqw",
            "note": ""
          }
        ]
      },
      {
        "name": "Full Body Circuit",
        "exercises": [
          {
            "name": "Warm Up Cardio",
            "weeks": [
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "foehwvettmQ",
            "note": ""
          },
          {
            "name": "Upper Body Warm Up",
            "weeks": [
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video"
            ],
            "mode": "guided",
            "rest": "N/A",
            "videoId": "RN0ijKeTPj4",
            "note": ""
          },
          {
            "name": "Lower Body General warm up",
            "weeks": [
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video"
            ],
            "mode": "guided",
            "rest": "N/A",
            "videoId": "eQzoZFK2gB8",
            "note": ""
          },
          {
            "name": "A1: Dumbbell Reverse Lunges",
            "weeks": [
              "3 × 15 each leg",
              "3 × 15 each leg",
              "3 × 15 each leg",
              "3 × 15 each leg",
              "4 × 15 each leg",
              "4 × 15 each leg",
              "4 × 15 each leg",
              "4 × 15 each leg"
            ],
            "mode": "reps",
            "rest": "Next Movement",
            "videoId": "woN-fe0ubsc",
            "note": "Circuit A1–A8: complete in order, then repeat. Three rounds in weeks 1–4; four in weeks 5–8."
          },
          {
            "name": "A2: Burpees",
            "weeks": [
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15"
            ],
            "mode": "reps",
            "rest": "Next Movement",
            "videoId": "CR-C-OuhDWE",
            "note": "Circuit A1–A8: complete in order, then repeat. Three rounds in weeks 1–4; four in weeks 5–8."
          },
          {
            "name": "A3: Dumbbell Kickstand Deadlift",
            "weeks": [
              "3 × 15 each leg",
              "3 × 15 each leg",
              "3 × 15 each leg",
              "3 × 15 each leg",
              "4 × 15 each leg",
              "4 × 15 each leg",
              "4 × 15 each leg",
              "4 × 15 each leg"
            ],
            "mode": "reps",
            "rest": "Next Movement",
            "videoId": "HDfyHcuMs5Y",
            "note": "Circuit A1–A8: complete in order, then repeat. Three rounds in weeks 1–4; four in weeks 5–8."
          },
          {
            "name": "A4: Diamond Push Ups",
            "weeks": [
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15"
            ],
            "mode": "reps",
            "rest": "Next Movement",
            "videoId": "7D4BRZbuw60",
            "note": "Circuit A1–A8: complete in order, then repeat. Three rounds in weeks 1–4; four in weeks 5–8."
          },
          {
            "name": "A5: Dumbbell Hammer Curls",
            "weeks": [
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15"
            ],
            "mode": "reps",
            "rest": "Next Movement",
            "videoId": "C3yex7aOWxE",
            "note": "Circuit A1–A8: complete in order, then repeat. Three rounds in weeks 1–4; four in weeks 5–8."
          },
          {
            "name": "A6: Jump Squat",
            "weeks": [
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15"
            ],
            "mode": "reps",
            "rest": "Next Movement",
            "videoId": "3t6ap-UFrNU",
            "note": "Circuit A1–A8: complete in order, then repeat. Three rounds in weeks 1–4; four in weeks 5–8."
          },
          {
            "name": "A7: Dumbbell Renegade Row",
            "weeks": [
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10"
            ],
            "mode": "reps",
            "rest": "Next movement",
            "videoId": "DkyQUgcM2hA",
            "note": "Circuit A1–A8: complete in order, then repeat. Three rounds in weeks 1–4; four in weeks 5–8."
          },
          {
            "name": "A8: Arnold Presses",
            "weeks": [
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15"
            ],
            "mode": "reps",
            "rest": "60-120 seconds",
            "videoId": "HPMgUWDZAbg",
            "note": "Circuit A1–A8: complete in order, then repeat. Three rounds in weeks 1–4; four in weeks 5–8."
          }
        ]
      },
      {
        "name": "Cardio & Mobility",
        "exercises": [
          {
            "name": "Cardio of Choice",
            "weeks": [
              "30 minutes",
              "30 minutes",
              "30 minutes",
              "30 minutes",
              "45 minutes",
              "45 minutes",
              "45 minutes",
              "45 minutes"
            ],
            "mode": "time",
            "rest": "60 seconds",
            "videoId": "foehwvettmQ",
            "note": ""
          },
          {
            "name": "Foam Roll Each Body Part",
            "weeks": [
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video",
              "Follow the foam-roll video"
            ],
            "mode": "guided",
            "rest": "N/A",
            "videoId": "fAuTCGNyNPA",
            "note": ""
          },
          {
            "name": "Dynamic Toe Touches",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "okCO8yEyNqc",
            "note": ""
          },
          {
            "name": "Dynamic Piriformis Stretch",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "B7uT1PEAlPI",
            "note": ""
          },
          {
            "name": "Dynamic Pigeon Glute Stretch",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "vytOCMdfJAE",
            "note": ""
          },
          {
            "name": "Dynamic Hip Flexor Stretch",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "mE9pxMQHtwA",
            "note": ""
          },
          {
            "name": "Dynamic Hamstring Stretch",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "QQpdWSrdi-M",
            "note": ""
          },
          {
            "name": "Dynamic Calf Stretch",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "aWifQb0w2jk",
            "note": ""
          },
          {
            "name": "Dowell Around the Worlds",
            "weeks": [
              "15 seconds each way",
              "15 seconds each way",
              "15 seconds each way",
              "15 seconds each way",
              "15 seconds each way",
              "15 seconds each way",
              "15 seconds each way",
              "15 seconds each way"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "AbnaQ74HMb8",
            "note": ""
          },
          {
            "name": "Static Lat Stretch",
            "weeks": [
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "B11mipKUZuY",
            "note": ""
          },
          {
            "name": "Static Tricep Stretch",
            "weeks": [
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "JezxtZBXIqw",
            "note": ""
          }
        ]
      },
      {
        "name": "Rest",
        "exercises": []
      }
    ]
  },
  "babe": {
    "name": "BABE Body",
    "goal": "Sculpt with Pilates",
    "days": [
      {
        "name": "LEG DAY - Hamstrings, Glutes, and Quads",
        "exercises": [
          {
            "name": "Warm Up Cardio",
            "weeks": [
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "foehwvettmQ",
            "note": ""
          },
          {
            "name": "Lower Body General warm up",
            "weeks": [
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "eQzoZFK2gB8",
            "note": ""
          },
          {
            "name": "Dumbbell RDLs",
            "weeks": [
              "4 × 8-10",
              "4 × 8-10",
              "4 × 8-10",
              "4 × 8-10",
              "4 × 12",
              "4 × 12",
              "4 × 12",
              "4 × 12"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "LaBV8upNiBM",
            "note": ""
          },
          {
            "name": "Smith Machine Deficit Reverse Lunges",
            "weeks": [
              "4 × 8-10 each leg",
              "4 × 8-10 each leg",
              "4 × 8-10 each leg",
              "4 × 8-10 each leg",
              "4 × 10-12 each leg",
              "4 × 10-12 each leg",
              "4 × 10-12 each leg",
              "4 × 10-12 each leg"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "J5NA8e9MwKQ",
            "note": ""
          },
          {
            "name": "Wide Stance Leg Press",
            "weeks": [
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "H641KQp1RV0",
            "note": ""
          },
          {
            "name": "Leg Extension Machine",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 12-15",
              "3 × 12-15",
              "3 × 12-15",
              "3 × 12-15"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "Q1GkB16Qe7E",
            "note": ""
          },
          {
            "name": "Seated Machine Leg Hamstring Curls",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "SIHpcRiRrBs",
            "note": ""
          },
          {
            "name": "Glute Focus Hyperextension",
            "weeks": [
              "2 × 20",
              "2 × 20",
              "2 × 20",
              "2 × 20",
              "4 × 20",
              "4 × 20",
              "4 × 20",
              "4 × 20"
            ],
            "mode": "reps",
            "rest": "30 sec",
            "videoId": "1fLk-DCKLLw",
            "note": ""
          }
        ]
      },
      {
        "name": "Full Body Sculpt 1.0",
        "exercises": [
          {
            "name": "Full Body Sculpt Iron Harvest Day 1",
            "weeks": [
              "Follow-along class",
              "Follow-along class",
              "Follow-along class",
              "Follow-along class",
              "Follow-along class",
              "Follow-along class",
              "Follow-along class",
              "Follow-along class"
            ],
            "mode": "guided",
            "rest": "N/A",
            "videoId": "xFoIdyXHXnE",
            "note": ""
          }
        ]
      },
      {
        "name": "Full Body Sculpt 2.0",
        "exercises": [
          {
            "name": "Full Body Sculpt Iron Harvest Day 2",
            "weeks": [
              "Follow-along class",
              "Follow-along class",
              "Follow-along class",
              "Follow-along class",
              "Follow-along class",
              "Follow-along class",
              "Follow-along class",
              "Follow-along class"
            ],
            "mode": "guided",
            "rest": "N/A",
            "videoId": "g8H6kO3-Ysk",
            "note": ""
          }
        ]
      },
      {
        "name": "Back and Upper Body",
        "exercises": [
          {
            "name": "Upper Body Warm Up",
            "weeks": [
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes",
              "3-5 minutes"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "RN0ijKeTPj4",
            "note": ""
          },
          {
            "name": "Assisted Machine Wide Grip Pull Ups",
            "weeks": [
              "4 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 12-15",
              "4 × 12-15",
              "4 × 12-15",
              "4 × 12-15"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "LOaDkKS8Gd8",
            "note": ""
          },
          {
            "name": "Barbell Bent Over Rows",
            "weeks": [
              "4 × 8-10",
              "4 × 8-10",
              "4 × 8-10",
              "4 × 8-10",
              "4 × 12-15",
              "4 × 12-15",
              "4 × 12-15",
              "4 × 12-15"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "xWroPxK6T-I",
            "note": ""
          },
          {
            "name": "Dumbbell Incline Bench Press",
            "weeks": [
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 12-15",
              "3 × 12-15",
              "3 × 12-15",
              "3 × 12-15"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "vtX6iKB_unc",
            "note": ""
          },
          {
            "name": "Dumbbell Bent Over Single Arm Row",
            "weeks": [
              "3 × 10 each side",
              "3 × 10 each side",
              "3 × 10 each side",
              "3 × 10 each side",
              "4 × 10 each side",
              "4 × 10 each side",
              "4 × 10 each side",
              "4 × 10 each side"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "fyu93g0_Ywk",
            "note": ""
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "weeks": [
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "3 × 10",
              "4 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "EEzk2of5Xtc",
            "note": ""
          },
          {
            "name": "EZ Bar Bicep Curls",
            "weeks": [
              "3 × 12-15",
              "3 × 12-15",
              "3 × 12-15",
              "3 × 12-15",
              "4 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "sno8KPoJkO4",
            "note": ""
          },
          {
            "name": "EZ Bar Skull Crushers",
            "weeks": [
              "3 × 12-15",
              "3 × 12-15",
              "3 × 12-15",
              "3 × 12-15",
              "4 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": "e7LZLYRyFh8",
            "note": ""
          }
        ]
      },
      {
        "name": "Full Body Sculpt 3.0 (Pilates)",
        "exercises": [
          {
            "name": "Full Body Sculpt Iron Harvest Day 3",
            "weeks": [
              "Follow-along Pilates class",
              "Follow-along Pilates class",
              "Follow-along Pilates class",
              "Follow-along Pilates class",
              "Follow-along Pilates class",
              "Follow-along Pilates class",
              "Follow-along Pilates class",
              "Follow-along Pilates class"
            ],
            "mode": "guided",
            "rest": "N/A",
            "videoId": "OCJsGBKKAXE",
            "note": ""
          }
        ]
      },
      {
        "name": "Rest",
        "exercises": []
      },
      {
        "name": "Rest",
        "exercises": []
      }
    ]
  },
  "home": {
    "name": "WOKE At-Home",
    "goal": "Train at home",
    "days": [
      {
        "name": "Legs & Core",
        "exercises": [
          {
            "name": "Warm Up Cardio",
            "weeks": [
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "foehwvettmQ",
            "note": ""
          },
          {
            "name": "Foam Roll Each Body Part",
            "weeks": [
              "15-30 seconds each body part",
              "15-30 seconds each body part",
              "15-30 seconds each body part",
              "15-30 seconds each body part",
              "15-30 seconds each body part",
              "15-30 seconds each body part",
              "15-30 seconds each body part",
              "15-30 seconds each body part"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "fAuTCGNyNPA",
            "note": ""
          },
          {
            "name": "Foam Roll Leg Curl",
            "weeks": [
              "4 × 6-8",
              "4 × 6-8",
              "4 × 6-8",
              "4 × 6-8",
              "4 × 6-8",
              "4 × 6-8",
              "4 × 6-8",
              "4 × 6-8"
            ],
            "mode": "reps",
            "rest": "30 sec",
            "videoId": null,
            "note": "Use the prescribed slow four-second lowering phase."
          },
          {
            "name": "1A: Elevated Heel Goblet Squats",
            "weeks": [
              "3 × 20",
              "3 × 20",
              "3 × 20",
              "3 × 20",
              "4 × 20",
              "4 × 20",
              "4 × 20",
              "4 × 20"
            ],
            "mode": "reps",
            "rest": "30 sec",
            "videoId": "11pY24sWdAs",
            "note": ""
          },
          {
            "name": "1B: Sissy Squats",
            "weeks": [
              "4 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10",
              "4 × 10"
            ],
            "mode": "reps",
            "rest": "30 sec",
            "videoId": "dD9XBUjFzHg",
            "note": ""
          },
          {
            "name": "Dumbbell Walking Lunges",
            "weeks": [
              "3 × 8 each leg",
              "3 × 8 each leg",
              "3 × 8 each leg",
              "3 × 8 each leg",
              "4 × 8 each leg",
              "4 × 8 each leg",
              "4 × 8 each leg",
              "4 × 8 each leg"
            ],
            "mode": "reps",
            "rest": "60-90 seconds",
            "videoId": "AW3S7KQAI8A",
            "note": ""
          },
          {
            "name": "Standing Calf Raises",
            "weeks": [
              "3 × 20",
              "3 × 20",
              "3 × 20",
              "3 × 20",
              "4 × 20",
              "4 × 20",
              "4 × 20",
              "4 × 20"
            ],
            "mode": "reps",
            "rest": "30 sec",
            "videoId": "GGlhespcg2Y",
            "note": ""
          }
        ]
      },
      {
        "name": "Upper Body Push",
        "exercises": [
          {
            "name": "Warm Up Cardio",
            "weeks": [
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "foehwvettmQ",
            "note": ""
          },
          {
            "name": "Upper Body Warm Up",
            "weeks": [
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video"
            ],
            "mode": "guided",
            "rest": "N/A",
            "videoId": "RN0ijKeTPj4",
            "note": ""
          },
          {
            "name": "Floor Press",
            "weeks": [
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12"
            ],
            "mode": "reps",
            "rest": "30 sec",
            "videoId": null,
            "note": ""
          },
          {
            "name": "A1: Dumbbell Incline Bench Press",
            "weeks": [
              "3 × 15-20",
              "3 × 15-20",
              "3 × 15-20",
              "3 × 15-20",
              "3 × 15-20",
              "3 × 15-20",
              "3 × 15-20",
              "3 × 15-20"
            ],
            "mode": "reps",
            "rest": "60-90 seconds",
            "videoId": "vtX6iKB_unc",
            "note": ""
          },
          {
            "name": "A2: Dumbbell Skull Crushers",
            "weeks": [
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16"
            ],
            "mode": "reps",
            "rest": "60-90 seconds",
            "videoId": "9RxzR68fAdM",
            "note": ""
          },
          {
            "name": "Arnold Presses",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12",
              "4 × 10-12"
            ],
            "mode": "reps",
            "rest": "30 sec",
            "videoId": "HPMgUWDZAbg",
            "note": ""
          },
          {
            "name": "Diamond Push Ups",
            "weeks": [
              "4 × 10-15",
              "4 × 10-15",
              "4 × 10-15",
              "4 × 10-15",
              "4 × 15-20",
              "4 × 15-20",
              "4 × 15-20",
              "4 × 15-20"
            ],
            "mode": "reps",
            "rest": "30 sec",
            "videoId": "JKymZDwJmR0",
            "note": ""
          }
        ]
      },
      {
        "name": "Upper Body Pull",
        "exercises": [
          {
            "name": "Warm Up Cardio",
            "weeks": [
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "foehwvettmQ",
            "note": ""
          },
          {
            "name": "Upper Body Warm Up",
            "weeks": [
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video"
            ],
            "mode": "guided",
            "rest": "N/A",
            "videoId": "RN0ijKeTPj4",
            "note": ""
          },
          {
            "name": "DB Lat Pull Over",
            "weeks": [
              "3 × 8-12",
              "3 × 8-12",
              "3 × 8-12",
              "3 × 8-12",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12",
              "4 × 8-12"
            ],
            "mode": "reps",
            "rest": "30 sec",
            "videoId": "2uYAbkx6HsQ",
            "note": ""
          },
          {
            "name": "A1: Dumbbell Bent Over Single Arm Row",
            "weeks": [
              "3 × 8 each arm",
              "3 × 8 each arm",
              "3 × 8 each arm",
              "3 × 8 each arm",
              "4 × 10 each arm",
              "4 × 10 each arm",
              "4 × 10 each arm",
              "4 × 10 each arm"
            ],
            "mode": "reps",
            "rest": "Next exercise",
            "videoId": "fyu93g0_Ywk",
            "note": "Use the prescribed four-second tempo. Log repetitions, not seconds."
          },
          {
            "name": "A2: Reverse Curls/ Zottman Curl",
            "weeks": [
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "3 × 15"
            ],
            "mode": "reps",
            "rest": "60-90 seconds",
            "videoId": "ZxRb23NmB8o",
            "note": ""
          },
          {
            "name": "Bent Over Rear Delt Fly",
            "weeks": [
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "4 × 12-16",
              "4 × 12-16",
              "4 × 12-16",
              "4 × 12-16"
            ],
            "mode": "reps",
            "rest": "60 seconds",
            "videoId": "IcVyRxqM4ys",
            "note": ""
          },
          {
            "name": "Dumbbell Curls Single Arm",
            "weeks": [
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "3 × 12-16",
              "4 × 12-16",
              "4 × 12-16",
              "4 × 12-16",
              "4 × 12-16"
            ],
            "mode": "reps",
            "rest": "30-60 seconds",
            "videoId": "Q6jOV774Dn8",
            "note": ""
          },
          {
            "name": "Dumbbell Hammer Curls",
            "weeks": [
              "3 × 12",
              "3 × 12",
              "3 × 12",
              "3 × 12",
              "4 × 12",
              "4 × 12",
              "4 × 12",
              "4 × 12"
            ],
            "mode": "reps",
            "rest": "45-60 seconds",
            "videoId": "C3yex7aOWxE",
            "note": ""
          }
        ]
      },
      {
        "name": "Full Body High Intensity",
        "exercises": [
          {
            "name": "Warm Up Cardio",
            "weeks": [
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "foehwvettmQ",
            "note": ""
          },
          {
            "name": "Lower Body Active Warm Up",
            "weeks": [
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video"
            ],
            "mode": "guided",
            "rest": "N/A",
            "videoId": "WzrIqnI__EE",
            "note": ""
          },
          {
            "name": "Cossack Squat/ Side Lunges",
            "weeks": [
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "3 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15",
              "4 × 15"
            ],
            "mode": "reps",
            "rest": "30 sec",
            "videoId": "iCbyL2XMvII",
            "note": ""
          },
          {
            "name": "Barbell Sumo Deadlift",
            "weeks": [
              "3 × 8",
              "3 × 8",
              "3 × 8",
              "3 × 8",
              "3 × 8",
              "3 × 8",
              "3 × 8",
              "3 × 8"
            ],
            "mode": "reps",
            "rest": "60 sec",
            "videoId": null,
            "note": ""
          },
          {
            "name": "Single Leg RDL",
            "weeks": [
              "4 × 12 (6 each leg)",
              "4 × 12 (6 each leg)",
              "4 × 12 (6 each leg)",
              "4 × 12 (6 each leg)",
              "4 × 12 (6 each leg)",
              "4 × 12 (6 each leg)",
              "4 × 12 (6 each leg)",
              "4 × 12 (6 each leg)"
            ],
            "mode": "reps",
            "rest": "30 sec",
            "videoId": "QuVKh5jz_GY",
            "note": ""
          },
          {
            "name": "Dumbbell Reverse Lunges",
            "weeks": [
              "4 × 16 (8 each leg)",
              "4 × 16 (8 each leg)",
              "4 × 16 (8 each leg)",
              "4 × 16 (8 each leg)",
              "4 × 16 (8 each leg)",
              "4 × 16 (8 each leg)",
              "4 × 16 (8 each leg)",
              "4 × 16 (8 each leg)"
            ],
            "mode": "reps",
            "rest": "30 sec",
            "videoId": "woN-fe0ubsc",
            "note": ""
          },
          {
            "name": "Glute Bridges",
            "weeks": [
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12",
              "3 × 10-12"
            ],
            "mode": "reps",
            "rest": "30 sec",
            "videoId": "K8o0xL2uINc",
            "note": ""
          },
          {
            "name": "Planks",
            "weeks": [
              "2 × 30 seconds",
              "2 × 30 seconds",
              "2 × 30 seconds",
              "2 × 30 seconds",
              "2 × 30 seconds",
              "2 × 30 seconds",
              "2 × 30 seconds",
              "2 × 30 seconds"
            ],
            "mode": "time",
            "rest": "60 seconds",
            "videoId": "Oa4ds1xDkZg",
            "note": ""
          }
        ]
      },
      {
        "name": "Cardio & Mobility",
        "exercises": [
          {
            "name": "Warm Up Cardio",
            "weeks": [
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes",
              "5 minutes"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "foehwvettmQ",
            "note": ""
          },
          {
            "name": "Lower Body Active Warm Up",
            "weeks": [
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video",
              "Follow the warm-up video"
            ],
            "mode": "guided",
            "rest": "N/A",
            "videoId": "WzrIqnI__EE",
            "note": ""
          },
          {
            "name": "Cardio of Choice",
            "weeks": [
              "30 minutes",
              "30 minutes",
              "30 minutes",
              "30 minutes",
              "45 minutes",
              "45 minutes",
              "45 minutes",
              "45 minutes"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "foehwvettmQ",
            "note": ""
          },
          {
            "name": "Dynamic Toe Touches",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "okCO8yEyNqc",
            "note": ""
          },
          {
            "name": "Dynamic Piriformis Stretch",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "B7uT1PEAlPI",
            "note": ""
          },
          {
            "name": "Dynamic Pigeon Glute Stretch",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "vytOCMdfJAE",
            "note": ""
          },
          {
            "name": "Dynamic Hip Flexor Stretch",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "mE9pxMQHtwA",
            "note": ""
          },
          {
            "name": "Dynamic Hamstring Stretch",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "QQpdWSrdi-M",
            "note": ""
          },
          {
            "name": "Dynamic Calf Stretch",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "aWifQb0w2jk",
            "note": ""
          },
          {
            "name": "Monster Walks",
            "weeks": [
              "3 × 15 each way",
              "3 × 15 each way",
              "3 × 15 each way",
              "3 × 15 each way",
              "3 × 15 each way",
              "3 × 15 each way",
              "3 × 15 each way",
              "3 × 15 each way"
            ],
            "mode": "reps",
            "rest": "30 seconds",
            "videoId": "R7U9R7gyi1U",
            "note": ""
          },
          {
            "name": "Static Lat Stretch",
            "weeks": [
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "B11mipKUZuY",
            "note": ""
          },
          {
            "name": "Static Tricep Stretch",
            "weeks": [
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm",
              "15 seconds each arm"
            ],
            "mode": "time",
            "rest": "N/A",
            "videoId": "JezxtZBXIqw",
            "note": ""
          },
          {
            "name": "Flow Series",
            "weeks": [
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg",
              "15 seconds each leg"
            ],
            "mode": "time",
            "rest": "",
            "videoId": null,
            "note": "Listed in the training PDF; confirm this sequence with the program team."
          }
        ]
      },
      {
        "name": "REST",
        "exercises": []
      },
      {
        "name": "REST",
        "exercises": []
      }
    ]
  }
};
