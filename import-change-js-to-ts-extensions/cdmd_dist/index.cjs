"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = transform;
function transform(file, api) {
    const root = api.jscodeshift(file.source);
    root.find(api.jscodeshift.ImportDeclaration).forEach((path) => {
        const source = path.value.source;
        if (typeof source.value !== "string") {
            return;
        }
        if (source.value.startsWith(".") && !source.value.endsWith(".ts")) {
            if (source.value.endsWith(".js")) {
                source.value = `${source.value.slice(0, -3)}.ts`;
            }
            else {
                source.value += ".ts";
            }
        }
    });
    return root.toSource();
}
