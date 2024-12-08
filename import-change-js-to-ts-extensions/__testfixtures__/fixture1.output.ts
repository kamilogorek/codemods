import foo from "package-import";
import custom from "@/custom/path";
import { barNoExt } from "./relative-import-no-ext.ts";
import { bar } from "./relative-import.ts";
import type BazNoExt from "../parent-import-no-ext.ts";
import type Baz from "../parent-import.ts";
import { type QouxNoExt } from "./nested/import-no-ext.ts";
import { type Qoux } from "./nested/import.ts";
import * as existing from "./already-existing.ts";
