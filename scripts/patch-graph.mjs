// Adds Obsidian-style color groups to @quartz-community/graph.
// Runs on `npm install` / `npm ci` (postinstall). Groups live in graph-colors.json.
import fs from "node:fs"
import path from "node:path"

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..")
const target = path.join(root, "node_modules/@quartz-community/graph/dist/components/index.js")
const MARK = "/*graph-color-groups*/"

if (!fs.existsSync(target)) {
  console.warn("[patch-graph] graph plugin not installed, skipping")
  process.exit(0)
}
const { groups = [] } = JSON.parse(fs.readFileSync(path.join(root, "graph-colors.json"), "utf8"))
let src = fs.readFileSync(target, "utf8")

// strip any previous patch so this is idempotent
src = src.replace(/\/\*graph-color-groups\*\/.*?\/\*end\*\//s, "")

const anchor = /function (\$e)\((\w)\)\{var (\w)=\2\.id===(\w);/
const m = src.match(anchor)
if (!m) {
  console.warn("[patch-graph] color function not found (plugin updated?), skipping")
  process.exit(0)
}
const [, , arg] = m
const inject =
  `${MARK}var __G=${JSON.stringify(groups)};` +
  `if(${arg}.id!==${m[4]}){for(var __i=0;__i<__G.length;__i++){var __g=__G[__i];` +
  `if(__g.match.indexOf("tag:")===0){if((${arg}.tags||[]).map(function(t){return String(t).toLowerCase()}).indexOf(__g.match.slice(4).toLowerCase())>=0)return __g.color}` +
  `else if(${arg}.id.toLowerCase().indexOf(__g.match.toLowerCase())===0)return __g.color}}/*end*/`
src = src.replace(m[0], m[0] + inject)
fs.writeFileSync(target, src)
console.log(`[patch-graph] applied ${groups.length} color groups`)
