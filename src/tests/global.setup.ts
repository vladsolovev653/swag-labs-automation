import path from "path";
import { test as globalSetup } from "../fixtures/main-fixture";


globalSetup('Авторизация администратором', async ({ page, loginPage, inventoryPage }) => {
  const authFile = path.join(__dirname, '../../playwright/.auth/admin.json');

  await loginPage.open();

  const adminUsername = process.env.ADMIN_USERNAME as string;
  const adminPassword = process.env.ADMIN_PASSWORD as string;

  await loginPage.login(adminUsername, adminPassword);
  await inventoryPage.shouldBeLoaded();

  await page.context().storageState({ path: authFile });
});
