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
exports.profile = exports.signip = exports.signup = void 0;
const register_1 = __importDefault(require("../models/register"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const handleBcrypt_1 = require("../handleBrycryp/handleBcrypt");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, password, email } = req.body;
    try {
        const existeEmail = yield register_1.default.findOne({
            where: {
                email: email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                message: 'email existente'
            });
        }
        const passwordHash = yield (0, handleBcrypt_1.encrypt)(password);
        const register = yield register_1.default.create({
            nombre: nombre,
            email: email,
            password: passwordHash
        });
        const saveRegisnter = yield register.save();
        const token = jsonwebtoken_1.default.sign({ _id: saveRegisnter }, process.env.TOKEN_SECRET || 'TOKEN');
        res.status(200).json({
            message: 'El registro se agrego correctamente',
            token
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'por favor hable con el administrador'
        });
    }
});
exports.signup = signup;
const signip = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeEmail = yield register_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            return res.status(200).json({
                message: 'usuario correcto'
            });
        }
        const register = yield register_1.default.create({
            nombre: body.nombre,
            email: body.email,
            password: body.password
        });
        yield (yield register).save();
        res.status(200).json({
            message: 'El registro se agrego correctamente'
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'por favor hable con el administrador'
        });
    }
});
exports.signip = signip;
const profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const register = yield register_1.default.findAll();
    res.json(register);
});
exports.profile = profile;
//# sourceMappingURL=auth.controlled.js.map