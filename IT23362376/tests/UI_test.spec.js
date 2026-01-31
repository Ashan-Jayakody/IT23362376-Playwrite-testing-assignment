const{ test , expect} = require("@playwright/test")

test("UI test", async({page}) => {
    await page.goto("https://www.swifttranslator.com/");

    const input = page.locator('textarea');
    const output = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

    await input.fill("mama guitar gahanava.");
    await expect(output).not.toBeEmpty();

    await page.reload();

    await expect(input).toHaveValue("");
    await expect(output).toBeEmpty();

});