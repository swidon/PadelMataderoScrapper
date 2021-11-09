const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('https://about.google/?fg=1&utm_source=google-ES&utm_medium=referral&utm_campaign=hp-header')
  await page.screenshot({ path: 'test.png' })
  await browser.close()
})()
