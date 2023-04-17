"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auntRouter = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auntRouter = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token)
        return res.status(401).json('Access denegado');
    const payload = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET || 'TOKEN');
    next();
};
exports.auntRouter = auntRouter;
//# sourceMappingURL=authprivado.js.map