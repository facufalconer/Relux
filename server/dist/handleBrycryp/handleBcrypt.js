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
exports.compare = exports.encrypt = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const encrypt = (texthash) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = yield bcrypt_1.default.hash(texthash, 10);
    return hash;
});
exports.encrypt = encrypt;
const compare = (texthash, tesxtplain) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = yield bcrypt_1.default.compare(texthash, tesxtplain);
    return hash;
});
exports.compare = compare;
//# sourceMappingURL=handleBcrypt.js.map