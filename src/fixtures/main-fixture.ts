import { mergeTests } from '@playwright/test';
import { test as pageFixtures } from './page-fixtures';


export const test = mergeTests(pageFixtures);
