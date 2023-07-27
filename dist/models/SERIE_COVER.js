"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const serie_cover_language_season_schema = new mongoose_1.Schema({
    season: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'season' },
    number: { type: Number, required: true }
});
const serie_cover_language_schema = new mongoose_1.Schema({
    language: { type: String, required: true },
    seasons: { type: [serie_cover_language_season_schema] }
});
const serie_cover_schema = new mongoose_1.Schema({
    // COVER
    PCCover: { type: String, required: true },
    MovileCover: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    // DATA
    views: { type: Number, default: 0 },
    seasons: { type: Number, default: 0 },
    languages: { type: [serie_cover_language_schema] },
    // CLASIFICATION
    type: { type: String, required: true },
    tags: { type: Array, required: true },
    score: { type: Number, default: 0 },
    // ASOCIADO
    serie: { type: mongoose_1.Schema.Types.ObjectId, ref: 'serie', required: true },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('serie_cover', serie_cover_schema);
//# sourceMappingURL=SERIE_COVER.js.map