# ACCA FR Pocket Revision

A mobile-first revision reader for ACCA Financial Reporting. The site is published with GitHub Pages and is separate from the account owner's professional portfolio.

## Features

- Searchable revision cards organised by the 27-topic chapter map
- Formulas, notes, common traps and examination tips
- Flashcard recall, practice prompts, bookmarks and reading progress
- Local-only reading data in the current browser; there is no account or server-side progress sync
- Progressive web app with offline caching after the first successful visit
- December 2026 exam format and examinable-document overview

## Content and exam scope

The library preserves the existing site's card content and adds focused coverage for Chapter 24 (consolidated statement of profit or loss) and Chapter 25 (IAS 28 associates). The syllabus overview is based on ACCA's 2026/27 Financial Reporting Study Guide and examinable documents for September 2026 to June 2027. Check ACCA's current documents before each sitting because examinable standards can change.

The cards were compared with the available ACCA Study Hub quiz reviews. Chapter 24 now reinforces the subsidiary disposal gain/loss working; Chapter 25 reinforces time-apportioned post-acquisition profit, impairment, the distinction between significant influence and joint control, and the investor-share adjustment for unrealised profit on associate transactions. Individual assessment scores are not reproduced on this public site.

## Update a revision card

Edit `cards.js`. Each entry is a JavaScript object with these fields:

- `id`: stable, unique value such as `ifrs15-04`
- `chapter`: number from the chapter map (1–27)
- `topic`, `label`, `title`, `summary`, `key`, `body`
- `formula`, `trap`, `tip` (use an empty string if a field does not apply)

To update an existing note, edit its current card object and keep the same `id`. To add a card, add a new object to the `cards` array with an unused ID and the correct chapter number. This keeps related notes together and avoids duplicates.

## Publish an update

1. Edit `cards.js` in this repository.
2. Commit and push the change to the `main` branch.
3. GitHub Actions automatically publishes the update to GitHub Pages. Follow the run in the repository's **Actions** tab if you want to check its status.

The other site behavior lives in `app.js`; layout and mobile styling live in `styles.css`. Keep asset paths relative so the project site works under `/acca-fr-pocket-revision/`.

## Official ACCA references

- [FR syllabus and study guide (2026/27)](https://www.accaglobal.com/gb/en/student/exam-support-resources/fundamentals-exams-study-resources/f7/syllabus-study-guide.html)
- [FR examinable documents (September 2026–June 2027)](https://www.accaglobal.com/gb/en/student/exam-support-resources/fundamentals-exams-study-resources/f7/examinable-documents.html)
- [IFRS 18 and the FR examination](https://www.accaglobal.com/gb/en/student/exam-support-resources/fundamentals-exams-study-resources/f7/technical-articles/ifrs-18.html)


