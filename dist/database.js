"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect(process.env.URI_MONGODB)
    .then(db => console.log('database on connection'))
    .catch(err => console.error(err));
//# sourceMappingURL=database.js.map