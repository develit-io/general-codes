import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./src/index'],
  outDir: 'dist',
  declaration: true,
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
