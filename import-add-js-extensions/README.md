# import-add-js-extensions

This codemod adds `.js` file extension to relative, top-level imports.

### Before

```js
import foo from "package-import";
import custom from "@/custom/path";
import { bar } from "./relative-import";
import type Baz from "../parent-import";
import { type Qoux } from "./nested/import";
import * as existing from "./already-existing.js";
```

### After

```js
import foo from "package-import";
import custom from "@/custom/path";
import { bar } from "./relative-import.js";
import type Baz from "../parent-import.js";
import { type Qoux } from "./nested/import.js";
import * as existing from "./already-existing.js";
```
