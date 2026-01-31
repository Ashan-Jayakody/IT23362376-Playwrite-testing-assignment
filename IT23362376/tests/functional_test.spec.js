const { test, expect } = require('@playwright/test');
const testCases = require('./inputPhrases');

//Declare a group of tests
test.describe('Singlish to Sinhala', () => {

  for (const tc of testCases) {
    test(tc.id, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/");

      const input = page.locator('textarea').first();
      await input.fill(tc.input);

      const outputLocator = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

      await expect(outputLocator).not.toBeEmpty({ timeout: 30000 });
      const actualOutput = (await outputLocator.textContent())?.trim();

      console.log(tc.id);
      console.log('Expected:', tc.expected);
      console.log('Actual:', actualOutput);

      expect(actualOutput).toContain(tc.expected);
    });
  }
});
