import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import dts from "rollup-plugin-dts";
import fs from "fs";
import path from "path";

const packageJson = JSON.parse(
  fs.readFileSync(path.resolve("./package.json"), "utf-8")
);

export default [
  // JS build (CJS + ESM)
  {
    input: "src/index.ts",
    output: [
      { file: packageJson.main, format: "cjs", sourcemap: true },
      { file: packageJson.module, format: "esm", sourcemap: true },
    ],
    plugins: [
      resolve(),
      commonjs(),
      json(), // allow importing JSON in your source
      typescript({
        tsconfig: "./tsconfig.json",
        useTsconfigDeclarationDir: false, // prevents absolute path issues
        clean: true, // clean cache to avoid stale types
      }),
    ],
    external: ["react", "react-dom"], // mark peer deps as external
  },

  // TypeScript declarations
  {
    input: "src/index.ts", // source TS, not dist
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];