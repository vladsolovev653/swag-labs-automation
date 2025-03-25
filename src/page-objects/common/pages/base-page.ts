import test from "@playwright/test";
import { BasePageObject } from "../base-page-object";


export abstract class BasePage extends BasePageObject {
  protected abstract readonly name: string;
  protected abstract readonly url: string;

  private readonly baseURL = test.info().project.use.baseURL as string;

  public async open(): Promise<void> {
    await test.step(`Открыть страницу "${this.name}"`, async () => {
      await this.page.goto(this.url);
    });

    await this.shouldBeLoaded();
  }

  public async reload(): Promise<void> {
    await test.step(`Перезагрузить страницу "${this.name}"`, async () => {
      await this.page.reload();
    });
  }

  public async shouldBeLoaded(): Promise<void> {
    await test.step(`Страница "${this.name}" успешно загрузилась`, async () => {
      await this.waitForURL();
    });
  }

  private async waitForURL(): Promise<void> {
    await test.step(`Ожидание URL страницы "${this.baseURL}${this.url}"`, async () => {
      await this.page.waitForURL(this.url);
    });
  }
}
