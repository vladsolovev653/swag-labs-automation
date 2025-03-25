import test from '@playwright/test';
import { TemplateStringValues } from '../../../interfaces/template-string-values';
import { BaseElement } from './base-element';


export class Input extends BaseElement {
  protected readonly typeOf = 'поле';

  public async fill(value: string, templateValues?: TemplateStringValues): Promise<void> {
    const locator = this.getLocator(templateValues);

    await test.step(`Указать в элементе "${this.typeOf} ${this.name}" значение "${value}"`, async () => {
      await locator.fill(value);
    });
  }

  public async fillPrivate(value: string, templateValues?: TemplateStringValues): Promise<void> {
    const locator = this.getLocator(templateValues);

    await test.step(`Указать значение в элементе "${this.typeOf} ${this.name}"`, async () => {
      await locator.fill(value);
    });
  }
}
