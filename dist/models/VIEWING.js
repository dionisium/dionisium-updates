"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const viewing_schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    redirect: { type: String, required: true },
    thumnail: { type: String, required: true },
    minute: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('viewing', viewing_schema);
//# sourceMappingURL=VIEWING.js.map