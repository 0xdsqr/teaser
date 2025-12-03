import { $, Glob } from "bun"

await $`rm -rf dist`

const files = new Glob("./src/**/*.{ts,tsx}").scan() as AsyncIterable<string>
const collectedFiles: string[] = []
for await (const file of files) {
  collectedFiles.push(file)
}

await Bun.build({
  format: "esm",
  outdir: "dist/esm",
  external: ["*"],
  root: "src",
  entrypoints: collectedFiles,
})

await $`tsc --outDir dist/types --declaration --emitDeclarationOnly --declarationMap`

// Copy CSS files to dist
await $`cp src/index.css dist/esm/`
await $`cp -r src/styles dist/esm/`
