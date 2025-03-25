import { BasePageObject } from "../base-page-object";


export abstract class BaseComponent extends BasePageObject {
  protected abstract readonly name: string;
}
