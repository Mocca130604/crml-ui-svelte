# AGENTS.md - crml-ui-svelte (Svelte Ecosystem Specification)

> **Authoritative specification for AI Coding Assistants working on crml-ui-svelte.**

---

## 🚀 1. Repository Purpose
This is the **Svelte 4/5 implementation** of the `crml-ui` design system, built with TypeScript, Vite, and Zero Ambient Blur Neubrutalism.

### Strict Design Guidelines:
1. Zero Ambient Blur (`box-shadow: 4px 4px 0px #0D0D0D;`).
2. Ink Border Stroke (`2.5px solid #0D0D0D` or `3px solid #0D0D0D`).
3. Tactile Mechanical Rebound physics (`transform: translate(3px, 3px)`).
4. Consistent Props & Events parity with Vue and React implementations.

---

## 📦 Synchronized Semantic Versioning & NPM Release Protocol

Whenever modifications, bug fixes, component additions, or documentation updates (such as README revisions) are committed:

### 🏷️ Versioning Classification Scheme:
1. **MAJOR UPDATE (`+1.0.0` or `X.0.0`)**:
   - Triggered whenever a **NEW COMPONENT** is added to the library (e.g. introducing a new primitive in atoms, molecules, or organisms).
2. **MINOR UPDATE (`0.+1.0` or `x.X.0`)**:
   - Triggered whenever a **BUG FIX** is implemented (resolving component logic bugs, styling errors, or cross-browser behavioral glitches).
3. **PATCH UPDATE (`0.0.+1` or `x.x.X`)**:
   - Triggered for **LIGHTER CHANGES** (documentation updates, README revisions, SEO tweaks, internal refactoring, typings, and configuration maintenance).

### 📋 NPM Package Files Whitelist:
- `package.json` MUST explicitly declare `"README.md"` inside `"files"`:
  ```json
  "files": [
    "dist",
    "README.md"
  ]
  ```
  This guarantees that `README.md` is always bundled into the published npm tarball and renders immediately on the npmjs.com overview page.

### 🚀 Automated Verification & Publishing Workflow:
1. Increment the version in `package.json` following the classification scheme above across synchronized packages.
2. Run `npm run build` to verify strict type-checking and bundling.
3. Publish to NPM registry:
   ```bash
   npm publish --access public
   ```
4. Commit with structured semver message: `chore(release): bump to vX.Y.Z - <description>`.
5. Push to `origin main`.
