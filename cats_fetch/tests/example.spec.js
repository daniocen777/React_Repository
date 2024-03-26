// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:9323/';

// npx playwright test => ejecutar test
test('app show s random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);
  // <p></p>
  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith('https://cataas.com/cat')).toBeTruthy();
});
