// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.dps.texas.gov/section/driver-license/driver-license-services-appointments');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Driver License Services/);
  await page.locator('xpath=//p[contains(text(),"To schedule an appointment")]/a').click();
  await expect(page).toHaveTitle(/Texas DPS - Schedule Appointment/)
  await page.locator('xpath=//button[contains(@class,"button white")]/span[text()="English"]').click();
  await page.locator('xpath=//label[text()="First Name"]/following-sibling::input').fill('Abhishek');
  await page.locator('xpath=//label[text()="Last Name"]/following-sibling::input').fill('Sen');
  await page.locator('xpath=//label[text()="Date of Birth (mm/dd/yyyy)"]/following-sibling::input').fill('11/11/2000');
  await page.locator('xpath=//label[text()="Last four of SSN"]/following-sibling::input').fill('0015');
  await page.locator('xpath=//button/span[text()="Log On"]').click();
  await page.locator('xpath=//span[text()="New Appointment"]').click();
  await page.locator('xpath=//button[text()="Apply for first time Texas DL/Permit"]').click();
  await page.locator('xpath=//label[text()="Email"]/following-sibling::input').fill('test@gmail.com');
  await page.locator('xpath=//label[text()="Verify Email"]/following-sibling::input').fill('test@gmail.com');
  await page.locator('xpath=//label[text()="Zip Code"]/following-sibling::input').fill('75101');
  await page.locator('xpath=//button/span[text()=" Next "]').click();
  const location = await page.locator('//div[@id="selectedLocation"]/parent::div//table//div/following-sibling::div').textContent();

});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
