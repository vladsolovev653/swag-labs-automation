import { test } from "../../fixtures/main-fixture";


test('Пример теста', async ({ inventoryPage }) => {
  await inventoryPage.open(); 
  await inventoryPage.header.cartShouldBeEmpty();
  await inventoryPage.addRandomItemToCart();
  await inventoryPage.header.cartShouldHaveCount(1);
});
