import { expect, test } from '@playwright/test';

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`layout e navegação em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(/Seu carro[\s\S]*Seu estilo[\s\S]*Sua KaKa/);
    await expect(page.getByRole('link', { name: 'Explorar produtos' })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.getByRole('link', { name: 'Explorar produtos' }).click();
    await expect(page).toHaveURL(/#produtos$/);
    await expect(page.getByRole('heading', { name: 'Pneus', exact: true })).toBeVisible();
    if (width <= 900) {
      await page.getByRole('button', { name: 'Abrir menu' }).click();
      await expect(page.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute('aria-expanded', 'true');
      await page.locator('#mobile-navigation').getByRole('link', { name: 'Galeria' }).click();
      await expect(page).toHaveURL(/#galeria$/);
      await expect(page.locator('#mobile-navigation')).toHaveCount(0);
    }
    await page.getByRole('link', { name: 'Consultar pneus' }).click();
    await expect(page).toHaveURL(/#contato$/);
    await expect(page.getByRole('link', { name: 'Acessar perfil da KaKa' })).toHaveAttribute('href', 'https://www.instagram.com/kakapneuserodas_/');
    expect(errors).toEqual([]);
    await page.goto('/');
    await page.evaluate(() => { (document.activeElement as HTMLElement)?.blur(); window.scrollTo(0, 0); });
    await page.screenshot({ path: `test-results/site-${width}.png`, fullPage: true });
  });
}

test('FAQ acessível, links e metadados', async ({ page, request }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('KaKa Pneus & Rodas | Feira de Santana, BA');
  const summary = page.locator('summary').first();
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(summary.locator('..')).toHaveAttribute('open', '');
  const links = await page.locator('a').evaluateAll(elements => elements.map(element => ({ href: element.getAttribute('href'), target: element.getAttribute('target'), rel: element.getAttribute('rel') })));
  for (const link of links) {
    expect(link.href).toBeTruthy();
    if (link.href?.startsWith('#')) await expect(page.locator(link.href)).toHaveCount(1);
    if (link.target === '_blank') { expect(link.rel).toContain('noopener'); expect(link.rel).toContain('noreferrer'); }
  }
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
  for (const path of ['/robots.txt', '/sitemap.xml', '/favicon.svg']) expect((await request.get(path)).status()).toBe(200);
});
