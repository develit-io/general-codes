import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    printConsoleTrace: true,
    projects: ['packages/**/vitest.config.ts'],
    coverage: {
      provider: 'istanbul',
      exclude: [
        ...coverageConfigDefaults.exclude,
        '**/*.config.ts',
        '**/*.relation.ts',
        '**/*.schema.ts',
      ],
    },
  },
})
