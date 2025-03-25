import { BasePageObject } from "../base-page-object";
import { TemplateStringValues } from "../../../interfaces/template-string-values";
import test, { expect, Locator } from "@playwright/test";
import { BaseElementProps } from "../../../interfaces/props/base-element-props";
import { StringHelper } from "../../../helpers/string-helper";


export abstract class BaseElement extends BasePageObject {
  protected abstract readonly typeOf: string;

  protected readonly selector: string;
  protected readonly name: string;

  constructor({ page, selector, name }: BaseElementProps) {
    super(page);

    this.selector = selector;
    this.name = name;
  }

  public async click(templateValues?: TemplateStringValues) {
    const locator = this.getLocator(templateValues);

    await test.step(`Нажать на элемент "${this.typeOf} ${this.name}"`, async () => {
      await locator.click();
    });
  }

  public async clickIfVisible(templateValues?: TemplateStringValues) {
    const locator = this.getLocator(templateValues);

    await test.step(`Нажать на элемент "${this.typeOf} ${this.name}", если он отображается на странице`, async () => {
      const isVisible = await locator.isVisible();

      if (isVisible) {
        await locator.click();
      }
    });
  }

  public async shouldBeVisible(templateValues?: TemplateStringValues) {
    const locator = this.getLocator(templateValues);

    await test.step(`Элемент "${this.typeOf} ${this.name}" отображается на странице`, async () => {
      await expect(locator).toBeVisible();
    });
  }

  public async shouldBeHidden(templateValues?: TemplateStringValues) {
    const locator = this.getLocator(templateValues);

    await test.step(`Элемент "${this.typeOf} ${this.name}" отсутствует на странице`, async () => {
      await expect(locator).toBeHidden();
    });
  }

  public async waitForVisible(templateValues?: TemplateStringValues) {
    const locator = this.getLocator(templateValues);

    await test.step(`Ожидание отображение элемента "${this.typeOf} ${this.name}" на странице`, async () => {
      await locator.waitFor({ state: 'visible' });
    });
  }

  public async shouldHaveText(value: string, templateValues?: TemplateStringValues) {
    const locator = this.getLocator(templateValues);

    await test.step(`Элемент "${this.typeOf} ${this.name}" содержит текст "${value}"`, async () => {
      await expect(locator).toHaveText(value);
    });
  }

  protected getLocator(templateValues?: TemplateStringValues): Locator {
    let selector = this.selector;

    if (templateValues) {
      selector = StringHelper.formatTemplate(selector, templateValues);
    }

    return this.page.locator(selector);
  }
}
