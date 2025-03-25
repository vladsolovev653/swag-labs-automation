import { BasePageObject } from "../base-page-object";
import { TemplateStringValues } from "../../../interfaces/template-string-values";
import test, { Locator, Page } from "@playwright/test";
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

  protected getLocator(templateValues?: TemplateStringValues): Locator {
    let selector = this.selector;

    if (templateValues) {
      selector = StringHelper.formatTemplate(selector, templateValues);
    }

    return this.page.locator(selector);
  }
}
