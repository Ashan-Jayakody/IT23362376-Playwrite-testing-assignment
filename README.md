# Playwrite-testing-assignment

This repository contains automated functional test cases written using Playwright to validate the Singlish to Sinhala translation functionality as well as UI. Used https://www.swifttranslator.com/ as the translator.
---

### Prerequisites
Make sure the following are installed on your machine:

- Node.js (v16 or above recommended)
- npm (comes with Node.js)
- A modern browser (Chromium will be installed by Playwright)

---

### Setup Instructions to run the test

### 1️. Clone the Repository
```bash
git clone https://github.com/Ashan-Jayakody/IT23362376-Playwrite-testing-assignment.git
cd IT23362376
```
### 2️. Install dependencies
```bash
npm install
```
### 3. Install Playwrite
```bash
npm init playwright@latest
```
When prompted, choose / confirm:

- TypeScript or JavaScript (default: TypeScript)
- Tests folder name (default: tests, or e2e if tests already exists)
- Add a GitHub Actions workflow (recommended for CI)
- Install Playwright browsers (default: yes)


### 4. Run the tests
```bash
npx playwright test tests/functional_test.spec.js tests/UI_test.spec.js  --project chromium 
```
This will run both Functional test cases and UI test case.

### 4. See the report
```bash
npx playwrite show-report
```
This will show the report with passes and failed test cases.
