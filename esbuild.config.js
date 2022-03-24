const path = require('path');
const sassPlugin = require('esbuild-plugin-sass');

require('esbuild')
  .build({
    entryPoints: ['app.js'],
    color: true,
    bundle: true,
    outdir: path.join(process.cwd(), 'build'),
    absWorkingDir: path.join(process.cwd(), 'src'),
    sourcemap: true,
    watch: process.argv.includes('--watch'),
    incremental: process.argv.includes('--watch'),
    loader: {
      '.png': 'file',
      '.svg': 'file',
      '.ttf': 'file',
      '.woff': 'file',
      '.woff2': 'file',
      '.eot': 'file'
    },
    plugins: [sassPlugin()]
  })
  .catch(() => process.exit(1));
