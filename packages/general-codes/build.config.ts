import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { defineBuildConfig } from 'unbuild'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineBuildConfig({
  entries: ['./src/index'],
  outDir: 'dist',
  declaration: true,
  alias: {
    '@packages/general-codes': resolve(__dirname),
  },
  hooks: {
    'rollup:options': (_ctx, options) => {
      // Override external to not externalize our internal paths
      const originalExternal = options.external

      options.external = (id, importer, isResolved) => {
        if (id.startsWith('@packages/general-codes')) {
          return false
        }

        if (typeof originalExternal === 'function') {
          return originalExternal(id, importer, isResolved)
        }

        if (Array.isArray(originalExternal)) {
          return originalExternal.includes(id)
        }

        return false
      }
    },
  },
})
