import { Heading } from "../elements/heading";
import { BaseComponent } from "./base-component";
import { BurgerMenu } from "./burger-menu";
import { Link } from "../elements/link";
import test from "@playwright/test";
import { Badge } from "../elements/badge";


export class Header extends BaseComponent {
  protected readonly name = 'Хедер';

  private readonly appHeading = new Heading({page: this.page, selector: '.app_logo', name: 'Swag Labs' });
  private readonly cartLink = new Link({ page: this.page, selector: '.shopping_cart_link', name: 'Корзина' });
  private readonly cartBadge = new Badge({ page: this.page, selector: '.shopping_cart_badge', name: 'Кол-во товаров в корзине' });

  public readonly burgerMenu = new BurgerMenu(this.page);

  public async openCart(): Promise<void> {
    await test.step(`Перейти в корзину`, async () => {
      await this.cartLink.click();
    });
  }

  public async waitForAppHeadingVisible(): Promise<void> {
    await test.step(`Лого "Swag Labs" появилось на странице`, async () => {
      await this.appHeading.waitForVisible();
    });
  }

  public async cartShouldBeEmpty(): Promise<void> {
    await test.step(`В корзине отсутствуют товары`, async () => {
      await this.cartBadge.shouldBeHidden();
    });
  }

  public async cartShouldHaveCount(value: number): Promise<void> {
    await test.step(`Кол-во товаров в корзине "${value}"`, async () => {
      await this.cartBadge.shouldHaveText(value.toString());
    });
  }
}
