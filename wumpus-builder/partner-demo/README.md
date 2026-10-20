# Bootcamp partner showcase

A separate one-page, app-focused proposal. This directory is additive: the original `demo`, `personal`, and `public` editions are unchanged.

## Open

Serve the repository root with `python3 -m http.server 8765 --bind 127.0.0.1` and open `http://127.0.0.1:8765/wumpus-builder/partner-demo/`.

This branch is a reviewable prototype. GitHub Pages still serves main; pushing this branch does not deploy it. If approved for deployment, its separate path would be `/wumpus-builder/partner-demo/`.

## Working interactions

- Eight-week and seven-day selection using the original BAMF program data, loaded read-only from `../demo/program.js`.
- Movement navigation, sample weights and reps, explicit set completion, partial-session saving, session summary, reset, and a wall-clock rest timer.
- Drafts and saved-session summaries remain in memory only. Reloading clears them. No access to original tracker storage, no network submissions, no analytics, no account creation.
- Editable contribution model with validation, break-even calculation, and clearly labeled hypothetical assumptions.
- Keyboard-operable tabs and modal dialogs; responsive product-first layout on phones.

## Proposed, not connected

The partner dashboard is an illustrative design with invented sample values. Cloud sync, accounts, multi-program administration, automated reminders/outreach, purchase attribution, participant analytics, and internal integrations are not implemented. Data access and consent are prerequisites.

Missing prescriptions from the source program remain visibly unspecified. A program owner must review content before participant use. This prototype is not a coaching, registration, purchase-verification, or official submission system.

## Measurement

The small usability pilot should assess activation, returning users, sessions logged, and support effort. Purchase impact is exploratory; a larger appropriately designed comparison is needed before claiming incremental sales. Confirm existing company tools and baseline behavior first.

## Dependencies

No build or package installation. System fonts and local scripts/styles only. The original workout data is the only cross-directory dependency. Keep the relative directory structure when copying or previewing.
