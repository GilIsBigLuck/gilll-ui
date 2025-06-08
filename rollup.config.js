const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const esbuild = require("rollup-plugin-esbuild").default;
const dts = require("rollup-plugin-dts").default;
const pkg = require("./package.json");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main || "dist/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module || "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), esbuild()],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "esm",
    },
    plugins: [dts()],
  },
];
