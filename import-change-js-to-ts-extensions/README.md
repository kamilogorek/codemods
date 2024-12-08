# import-change-js-to-ts-extensions

This codemod changes `.js` to `.ts` file extension in relative, top-level imports.
If no `.js` file extension was previously used, it adds `.ts` file extension instead.

### Before

```js
import foo from "package-import";
import custom from "@/custom/path";
import { barNoExt } from "./relative-import-no-ext";
import { bar } from "./relative-import.js";
import type BazNoExt from "../parent-import-no-ext";
import type Baz from "../parent-import.js";
import { type QouxNoExt } from "./nested/import-no-ext";
import { type Qoux } from "./nested/import.js";
import * as existing from "./already-existing.ts";
```

### After

```js
import foo from "package-import";
import custom from "@/custom/path";
import { barNoExt } from "./relative-import-no-ext.ts";
import { bar } from "./relative-import.ts";
import type BazNoExt from "../parent-import-no-ext.ts";
import type Baz from "../parent-import.ts";
import { type QouxNoExt } from "./nested/import-no-ext.ts";
import { type Qoux } from "./nested/import.ts";
import * as existing from "./already-existing.ts";
```
