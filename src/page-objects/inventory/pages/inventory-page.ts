import test from "@playwright/test";
import { BasePage } from "../../common/pages/base-page";


export class InventoryPage extends BasePage {
  protected readonly name = 'Страница с товарами';
  protected readonly url = '/inventory.html';

  private readonly addToCartBtnListSelector = '//button[contains(@data-test, "add-to-cart")]';
  
  public async addRandomItemToCart(): Promise<void> {
    await test.step(`Добавить случайный товар в корзину`, async () => {
      const addToCartBtnList = await this.page.locator(this.addToCartBtnListSelector).all();

      if (addToCartBtnList.length > 0) {
        const btnIndex = Math.floor(Math.random() * addToCartBtnList.length);
        await addToCartBtnList[btnIndex].click();
      }
    });
  }
}
