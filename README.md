# Devon H. Dolan — newsletter archive

253 issues (2017 – today), published at https://devonhdolan.github.io/notes with [Quartz](https://quartz.jzhao.xyz/).

## Use it as an Obsidian vault

1. Open `content/` as a vault in Obsidian.
2. Install **Enzyme** from Community Plugins and set its chat model (API key + base URL) under Settings → Enzyme.
3. Enzyme maps the vault from what `scripts/organize.py` adds: `year/*`, `section/*` and `era/*` tags, prev/next and year links on every issue, cross-issue `[[wikilinks]]`, and hub notes in `content/Years/`.

After adding a new issue to `content/Issues/` (named `Issue NNN - YYYY-MM-DD.md`), rerun:

```bash
python3 scripts/organize.py
```

Pushing to `v5` deploys the site.

---

# Quartz v5

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>
