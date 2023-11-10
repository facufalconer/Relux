"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auntRouter = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auntRouter = (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ').pop();
        const tokenData = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET || 'TOKEN');
        if (tokenData._id) {
            next();
        }
        else {
            res.status(409);
            res.send({ error: 'Tu por aqui no pasas' });
        }
    }
    catch (_b) {
        res.status(409);
        res.send({ error: 'Tu por aqui no pasas' });
    }
};
exports.auntRouter = auntRouter;
//# sourceMappingURL=authprivado.js.map