# Bootcamp partner showcase

A separate one-page, app-focused proposal. This directory is additive: the original `demo`, `personal`, and `public` editions are unchanged.

## Open

Serve the repository root with `python3 -m http.server 8765 --bind 127.0.0.1` and open `http://127.0.0.1:8765/wumpus-builder/partner-demo/`.

This branch is a reviewable prototype. GitHub Pages still serves main; pushing this branch does not deploy it. If approved for deployment, its separate path would be `/wumpus-builder/partner-demo/`.

## Working interactions

- Four Iron Harvest 2026 programs, each with eight weeks and seven days: BAMF Builder, LFG Burn, BABE Body, and WOKE At-Home. Program selection is a preview, not a change to official enrollment.
- Movement navigation, sample weights/reps or seconds, explicit completion, guided-class completion, partial-session saving, program-filtered summaries, reset, and a wall-clock rest timer based on the lower end of the portal rest range.
- Drafts and saved-session summaries remain in memory only. Reloading clears them. No access to original tracker storage, no network submissions, no analytics, no account creation.
- Editable contribution model with validation, break-even calculation, and clearly labeled hypothetical assumptions.
- Keyboard-operable tabs and modal dialogs; responsive product-first layout on phones.

## Proposed, not connected

The partner dashboard is an illustrative design with invented sample values. Cloud sync, accounts, multi-program administration, automated reminders/outreach, purchase attribution, participant analytics, and internal integrations are not implemented. Data access and consent are prerequisites.

The official training PDFs supply eight-week targets, including Builder prescriptions missing from the original demo. The signed-in portal supplies demonstrations and rest instructions. A program owner must reconcile differences and review content before participant use. This prototype is not a coaching, registration, purchase-verification, or official submission system.

## Measurement

The small usability pilot should assess activation, returning users, sessions logged, and support effort. Purchase impact is exploratory; a larger appropriately designed comparison is needed before claiming incremental sales. Confirm existing company tools and baseline behavior first.

## Dependencies

No build or package installation. System fonts and local scripts/styles only. Program content lives in `programs.js`; no original workout file is modified or loaded. The footer links to the original demo.

## Bucked Up visual revision (October 20, 2026)

The concept now uses a black, white, and red palette, the current Bucked Up wordmark, and a supplied campaign banner. It remains explicitly labeled as a partnership concept by Misael Payan. The participant demo is shown before supporting copy on phones.

Asset provenance:

- `assets/favicon.png`: supplied in the user's Bucked Up Assets archive (16-pixel red deer icon; used only as a favicon).
- `assets/campaign-banner.jpeg`: supplied in the user's archive; displayed at its original 3:1 aspect ratio, without changing embedded artwork.
- `assets/bucked-up-wordmark.webp`: current header wordmark observed at `https://www.buckedup.com/public/default/img/home/header/logo-buckedup-text-white.webp`, retrieved through the browser on October 20, 2026.

The main store and signed-in Bootcamp portal were inspected on October 20, 2026 with the user's permission. All four program settings were reviewed, then BAMF Builder restored. Official workout logs, health entries, photos and submissions were not changed. No credentials, profile IDs, personal health records, or private group screenshots are included in the source.

## Portal-informed companion revision

The portal already provides daily plans/video demonstrations, completion tracking, progress check-ins and graphs, meal/supplement guidance, resources, FAQs, and community/support. The Guide tab links to those tools; official check-ins and purchase verification remain in the official portal. The proposed value is lower daily training friction, subject to participant research.

`programs.js` transcribes the official Iron Harvest 2026 training PDFs (PDF Training - BAMF Builder, LFG Burn, Babe Body, Woke At-Home; daily tables on pages 2–8) and visible portal cards. PDF order and week targets take precedence over static portal-card values. Rest and YouTube demonstration identifiers come from the matching portal cards. Original PDFs are not bundled.

Known content discrepancies for coach approval:
- Builder drop-set wording differs between the PDF and portal; the demo flags it rather than choosing an invented sequence.
- Several static portal set/rep values differ from PDF targets, including Burn reverse-grip pull-ups and calf raises, and WOKE hammer curls. The demo uses PDF week targets.
- WOKE's PDF includes Flow Series without a matching portal card/video; its link goes to the official daily plan, with an explicit review note.
- Burn uses Scissor Kicks in the PDF versus Flutter Kicks in the portal; both labels are shown. The WOKE row superset prefix is corrected to match the PDF order.

A future authorized integration could load a member's enrolled program automatically. This static demo requires manual selection. Program logs stay separate and are cleared on reload; no official account integration is implied.

The separate PDF proposal, private pricing brief, and parked ambassador-app idea are delivered outside the repository. No messages or analytics requests were sent on the user's behalf.
