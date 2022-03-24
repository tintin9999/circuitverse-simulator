const path = require('path');
const sassPlugin = require('esbuild-plugin-sass');
const pkg = require('./package.json');

require('esbuild')
  .build({
    entryPoints: ['app.js', 'versionHandler.js'],
    color: true,
    bundle: true,
    outdir: path.join(process.cwd(), 'build', `v${pkg.version}`),
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
