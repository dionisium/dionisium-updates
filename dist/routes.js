"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// CONTROLLER
const controller_1 = __importDefault(require("./controller"));
// LIBS
const validator_1 = __importDefault(require("./libs/validator"));
class default_1 extends controller_1.default {
    constructor(routes, path) {
        super();
        this.routes = routes;
        this.path = path;
    }
    router() {
        this.routes.post(this.path + '/views', { preValidation: validator_1.default }, this.views);
        this.routes.post(this.path + '/viewing', { preValidation: validator_1.default }, this.viewing);
    }
}
exports.default = default_1;
//# sourceMappingURL=routes.js.map