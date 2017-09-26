import { InjectionToken } from '@angular/core';

export interface TestConfig {
  apiEndpoint: string;
  title: string;
}

export const HERO_DI_CONFIG: TestConfig = {
  apiEndpoint: 'api.heroes.com',
  title: 'Dependency Injection  xxx'
};

export let TEST_CONFIG = new InjectionToken<TestConfig>('');
