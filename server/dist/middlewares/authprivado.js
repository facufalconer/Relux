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
    // if(!req.headers.authorization){
    //     return res.status(403).send({message:'no tienes autorizacion'})
    // }
    // const token = req.headers.authorization.split(' ')[1]
    // const payload = jwt.decode(token,process.env.TOKEN_SECRET || 'TOKEN')
    // const token = req.header('auth-token')
    // if(!token) return res.status(401).json('Access denegado')
    // const payload = jwt.verify(token,process.env.TOKEN_SECRET || 'TOKEN' )
    // next()
};
exports.auntRouter = auntRouter;
//# sourceMappingURL=authprivado.js.map