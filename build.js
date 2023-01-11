const { GasPlugin } = require('esbuild-gas-plugin')

require('esbuild')
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist/index.js',
    plugins: [GasPlugin],
  })
  .catch(() => process.exit(1))
