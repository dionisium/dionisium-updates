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
const SERIE_1 = __importDefault(require("./models/SERIE"));
const SERIE_COVER_1 = __importDefault(require("./models/SERIE_COVER"));
const USERS_1 = __importDefault(require("./models/USERS"));
const jsonwebtoken_config_1 = __importDefault(require("./libs/jsonwebtoken_config"));
class ctrl extends jsonwebtoken_config_1.default {
    views(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { serie_id, cover_id } = req.body;
                const serieCoverFound = yield SERIE_COVER_1.default.findByIdAndUpdate(cover_id, { views: 1 });
                yield serieCoverFound.updateOne({ views: (serieCoverFound.views + 1) });
                const serieFound = yield SERIE_1.default.findById(serie_id);
                yield serieFound.updateOne({ views: (serieFound.views + 1) });
                return res.status(200).json({ message: 'update' });
            }
            catch (error) {
                res.status(400).json({ error: 'error unexpected' });
                console.log(error);
            }
        });
    }
    viewing(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, thumnail, redirect, minute, token } = req.body;
                const decoded = yield jsonwebtoken_config_1.default.decoded(token);
                if (decoded == 'error unexpected') {
                    return res.status(401).json({ error: 'you is not authorized or the token is expired' });
                }
                const userFound = yield USERS_1.default.findById(decoded._id);
                let status = false;
                yield userFound.viewing.map(element => { if (element.redirect == redirect) {
                    status = true;
                } });
                if (status == true) {
                    return res.status(200).json({ message: 'not update' });
                }
                yield userFound.updateOne({ $push: { viewing: { name, thumnail, redirect, minute } } });
                res.status(200).json({ message: 'update' });
            }
            catch (error) {
                res.status(400).json({ error: 'error unexpected' });
                console.log(error);
            }
        });
    }
}
exports.default = ctrl;
//# sourceMappingURL=controller.js.map