"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const controller_1 = __importDefault(require("./controller"));
const controller = new controller_1.default();
const validator_1 = __importDefault(require("./libs/validator"));
router.post('/update/serie/views', validator_1.default, controller.views);
router.post('/update/serie/viewing', validator_1.default, controller.viewing);
exports.default = router;
//# sourceMappingURL=routes.js.map