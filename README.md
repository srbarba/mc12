# Meanwhile c12

<!-- automd:badges color=yellow -->

[![npm version](https://img.shields.io/npm/v/mc12?color=yellow)](https://npmjs.com/package/mc12)
[![npm downloads](https://img.shields.io/npm/dm/mc12?color=yellow)](https://npmjs.com/package/mc12)

<!-- /automd -->

Extendible task runner leveraging c12 for superior configuration flexibility.

## Motivation

When working across multiple projects using the same tools, maintaining these tools can significantly consume time. This burden could be drastically lessened if these tools adopted [unjs/c12](https://github.com/unjs/c12), allowing configuration changes from a centralized repository.

Given the slow or non-existent adoption of [unjs/c12](https://github.com/unjs/c12), this tool addresses this challenge by enabling the definition of tasks for tool synchronization from a centralized repository, simplifying the repetitive maintenance tasks.

## Usage

Install package:

<!-- automd:pm-install -->

```sh
# ✨ Auto-detect
npx nypm install mc12

# npm
npm install mc12

# yarn
yarn add mc12

# pnpm
pnpm install mc12

# bun
bun install mc12
```

<!-- /automd -->

Import:

<!-- automd:jsimport cjs cdn name="pkg" -->

**ESM** (Node.js, Bun)

```js
import {} from "pkg";
```

**CommonJS** (Legacy Node.js)

```js
const {} = require("pkg");
```

**CDN** (Deno, Bun and Browsers)

```js
import {} from "https://esm.sh/pkg";
```

<!-- /automd -->

## Development

<details>

<summary>local development</summary>

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

</details>

## License

<!-- automd:contributors license=MIT -->

Published under the [MIT](https://github.com/srbarba/mc12/blob/main/LICENSE) license.
Made by [community](https://github.com/srbarba/mc12/graphs/contributors) 💛
<br><br>
<a href="https://github.com/srbarba/mc12/graphs/contributors">
<img src="https://contrib.rocks/image?repo=srbarba/mc12" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
