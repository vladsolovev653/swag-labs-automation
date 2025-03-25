import test from "@playwright/test";
import { Button } from "../elements/button";
import { Link } from "../elements/link";
import { BaseComponent } from "./base-component";


export class BurgerMenu extends BaseComponent {
  protected readonly name = 'Бургер-меню хедера';

  private readonly burgerMenuBtn = new Button({ page: this.page, selector: '#react-burger-menu-btn', name: 'Бургер-меню' });

  public async logout(): Promise<void> {
    const logoutLink = this.getLink('logout_sidebar_link', 'Logout');

    await test.step(`Выйти из аккаунта`, async () => {
      await this.burgerMenuBtn.clickIfVisible();
      await logoutLink.click();      
    });
  }

  private getLink(id: string, name: string): Link {
    return new Link({ page: this.page, selector: `//a[@id="${id}"]`, name });
  }
}
