import { test, expect } from '@playwright/test';

test('deve inscrever usuário e mostrar confirmação', async ({ page }) => {
  // 1. Abre a página inicial (usa baseURL do playwright.config.js)
  await page.goto('/');

  // 2. Preenche o campo de email com "ada@example.com"
  await page.getByLabel('Seu e-mail').fill('ada@example.com');

  // 3. Clica no botão "Inscrever"
  await page.getByRole('button', { name: /inscrever/i }).click();

  // 4. Espera que apareça o texto "Inscrição confirmada!"
  // O auto-wait do Playwright vai esperar o elemento aparecer automaticamente
  await expect(page.getByText('Inscrição confirmada!')).toBeVisible();
});
