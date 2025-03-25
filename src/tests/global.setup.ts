import path from "path";
import { test as globalSetup } from "../fixtures/main-fixture";


globalSetup('Авторизация администратором', async ({ page, loginPage, inventoryPage }) => {
  const authFile = path.join(__dirname, '../../playwright/.auth/admin.json');

  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.shouldBeLoaded();

  await page.context().storageState({ path: authFile });
});
