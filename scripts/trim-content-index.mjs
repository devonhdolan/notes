// Search indexes every page's full text in the browser. The Interest Graph
// topic pages are huge (up to ~300k chars) and crash the tab while indexing,
// so cap each page's searchable text. Their stories stay searchable via the
// issue pages. Runs after `npx quartz build`.
import fs from "node:fs"

const MAX = 20000
const file = "public/static/contentIndex.json"
const index = JSON.parse(fs.readFileSync(file, "utf8"))
let trimmed = 0
for (const page of Object.values(index)) {
  if (typeof page.content === "string" && page.content.length > MAX) {
    page.content = page.content.slice(0, MAX)
    trimmed++
  }
}
fs.writeFileSync(file, JSON.stringify(index))
console.log(`[trim-content-index] capped ${trimmed} pages at ${MAX} chars`)
