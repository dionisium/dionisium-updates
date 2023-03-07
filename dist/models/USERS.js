"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const user_schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    roles: [{ type: String, required: true }],
    plain: [{ type: String, required: true }],
    viewing: [{ type: Object, ref: 'viewing' }],
    avatar: { type: String, default: 'deku' }
});
exports.default = (0, mongoose_1.model)('user', user_schema);
//# sourceMappingURL=USERS.js.map