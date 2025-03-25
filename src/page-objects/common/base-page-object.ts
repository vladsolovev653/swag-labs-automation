import { Page } from "@playwright/test";


export abstract class BasePageObject {
  constructor(protected readonly page: Page) { }
}
