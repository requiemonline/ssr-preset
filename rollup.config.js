import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import clear from 'rollup-plugin-clear'

const firstPlugins = [
	clear({
    targets: ['dist'],
    watch: true
  }),
]

const plugins = [
  typescript({
    module: 'ESNext',
    // useTsconfigDeclarationDir: true
  }),
]

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

export default {
	input: `src/index.ts`,
  output: [
  	{ file: pkg.main, format: 'cjs' },
  	{ file: pkg.module, format: 'esm' },
  ],
	plugins: [...firstPlugins, ...plugins],
	external
}