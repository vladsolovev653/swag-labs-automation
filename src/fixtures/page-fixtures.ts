import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../page-objects/login/pages/login-page';
import { InventoryPage } from '../page-objects/inventory/pages/inventory-page';


interface PageFixtures {
  loginPage: LoginPage,
  inventoryPage: InventoryPage
}

export const test = baseTest.extend<PageFixtures>({
  loginPage: async({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async({ page }, use) => {
    await use(new InventoryPage(page));
  }
});
