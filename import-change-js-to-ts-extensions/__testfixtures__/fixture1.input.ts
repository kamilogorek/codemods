import foo from "package-import";
import custom from "@/custom/path";
import { barNoExt } from "./relative-import-no-ext";
import { bar } from "./relative-import.js";
import type BazNoExt from "../parent-import-no-ext";
import type Baz from "../parent-import.js";
import { type QouxNoExt } from "./nested/import-no-ext";
import { type Qoux } from "./nested/import.js";
import * as existing from "./already-existing.ts";
