import type { Config } from 'jest'
import { compilerOptions } from './tsconfig.json'
import { pathsToModuleNameMapper } from 'ts-jest'

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testMatch: ['**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  reporters: [
    'default',
    'jest-github-actions-reporter'
  ],
  testLocationInResults: true
}

export default config
