import { TemplateStringValues } from "../interfaces/template-string-values";


export class StringHelper {
  /**
   * Подставляет значения в шаблонные строки.
   * @param str Шаблонная строка.
   * @param templateValues Значения, которые нужно подставить.
   * @returns Отформатированная строка.
   */
  public static formatTemplate(str: string, templateValues: TemplateStringValues): string {
    for (const [key, value] of Object.entries(templateValues)) {
      str = str.replace(`{${key}}`, value);
    }

    return str;
  }
}
