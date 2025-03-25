import { Page } from "@playwright/test";


export interface BaseElementProps {
  page: Page,
  selector: string,
  name: string  
}