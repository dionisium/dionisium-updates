"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const serie_schema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    thumnail: { type: String, required: true },
    lenguages: [{ type: Object, ref: 'language' }],
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'admins', required: true },
    views: { type: Number, default: 0 },
    date: { type: String }, dateMs: { type: Number, default: Date.now() }
});
exports.default = (0, mongoose_1.model)('serie', serie_schema);
//# sourceMappingURL=SERIE.js.map