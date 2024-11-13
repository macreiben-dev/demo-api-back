"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = getLogger;
/*--- LogConfig.ts ---*/
const typescript_logging_category_style_1 = require("typescript-logging-category-style");
const provider = typescript_logging_category_style_1.CategoryProvider.createProvider("server");
function getLogger(name) {
    return provider.getCategory(name);
}
