"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const serie_cover_schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    thumnail: { type: String, required: true },
    serie: { type: mongoose_1.Schema.Types.ObjectId, ref: 'serie', required: true },
    views: { type: Number, default: 0 },
    gender: { type: Array, required: true },
    date: { type: String }, dateMs: { type: Number, default: Date.now() },
    languages: [{ type: String }],
    seasons: { type: Number, default: 0 }
});
exports.default = (0, mongoose_1.model)('serie_cover', serie_cover_schema);
//# sourceMappingURL=SERIE_COVER.js.map