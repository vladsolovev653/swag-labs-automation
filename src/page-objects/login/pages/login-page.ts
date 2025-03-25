import { BasePage } from '../../common/pages/base-page';
import { Input } from '../../common/elements/input';
import test from '@playwright/test';


export class LoginPage extends BasePage {
  protected readonly url = '/';
  protected readonly name = 'Страница авторизации';

  private readonly usernameInput = new Input({ page: this.page, selector: '#user-name', name: 'Username' });
  private readonly passwordInput = new Input({ page: this.page, selector: '#password', name: 'Password' });
  private readonly loginBtn = new Input({ page: this.page, selector: '#login-button', name: 'Login' });

  public async login(username: string, password: string): Promise<void> {
    await test.step(`Авторизоваться пользователем "${username}"`, async () => {
      await this.usernameInput.fillPrivate(username);
      await this.passwordInput.fillPrivate(password);
      await this.loginBtn.click();
    });
  }
}
