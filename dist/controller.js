"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// MODELS
const SERIE_1 = __importDefault(require("./models/SERIE"));
const SERIE_COVER_1 = __importDefault(require("./models/SERIE_COVER"));
const USERS_1 = __importDefault(require("./models/USERS"));
// LIBS
const jsonwebtoken_config_1 = __importDefault(require("./libs/jsonwebtoken_config"));
const JWTLibs = new jsonwebtoken_config_1.default();
class default_1 {
    views(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { serie_id, cover_id } = req.body;
                const cover = yield SERIE_COVER_1.default.findByIdAndUpdate(cover_id, { views: 1 });
                yield cover.updateOne({ views: (cover.views + 1) });
                const serie = yield SERIE_1.default.findById(serie_id);
                yield serie.updateOne({ views: (serie.views + 1) });
                return res.code(200).send({ message: 'update' });
            }
            catch (error) {
                console.log(error);
                return res.code(400).send({ error: 'error unexpected' });
            }
        });
    }
    viewing(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, thumnail, redirect, minute, token } = req.body;
                const decoded = yield JWTLibs.decoded(token);
                if (decoded == 'error unexpected') {
                    return res.code(401).send({ error: 'you is not authorized or the token is expired' });
                }
                const userFound = yield USERS_1.default.findById(decoded === null || decoded === void 0 ? void 0 : decoded["_id"]);
                let status = false;
                yield userFound.viewing.map(element => { if (element.redirect == redirect) {
                    status = true;
                } });
                if (status == true) {
                    return res.code(200).send({ message: 'not update' });
                }
                yield userFound.updateOne({ $push: { viewing: { name, thumnail, redirect, minute } } });
                return res.code(200).send({ message: 'update' });
            }
            catch (error) {
                console.log(error);
                return res.code(400).send({ error: 'error unexpected' });
            }
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=controller.js.map