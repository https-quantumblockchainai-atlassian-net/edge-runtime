import type { Config } from '@jest/types'
import path from 'path'

export default (rootDir: string): Config.InitialOptions => {
  return {
    rootDir,
    setupFilesAfterEnv: [path.join(__dirname, 'jest.setup.js')],
    globals: {
      'ts-jest': {
        'diagnostics': true,
        'isolatedModules': true,
      },
    },
    preset: 'ts-jest/presets/default',
    testEnvironment: 'node',
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname',
    ],
  }
}
