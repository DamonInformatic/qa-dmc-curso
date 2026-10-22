import { defineConfig } from '@playwright/test';

// Las pruebas de la clase 8 verifican lógica: no abren navegador.
export default defineConfig({
  testDir: './tests',
  reporter: 'list',
});
