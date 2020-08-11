import babel from "@rollup/plugin-babel"
import { nodeResolve } from "@rollup/plugin-node-resolve"

const shared = {
  input: "src/index.js",
  external: [/@babel\/runtime/],
  plugins: [
    nodeResolve({
      modulesOnly: true,
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
    }),
  ],
}

const config = [
  ({ ...shared,
    ...{
      output: {
        file: "dist/prefix-classnames.cjs.js",
        format: "cjs",
      },
    } }),
  ({ ...shared,
    ...{
      output: {
        file: "dist/prefix-classnames.es.js",
        format: "es",
      },
    } }),
  ({ ...shared,
    ...{
      output: {
        file: "dist/prefix-classnames.iife.js",
        format: "iife",
        name: "T",
      },
    } }),
]

export default config
