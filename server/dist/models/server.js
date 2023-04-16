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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const usuarios_routes_1 = __importDefault(require("../routes/usuarios.routes"));
const auth_routes_1 = __importDefault(require("../routes/auth.routes"));
const cors_1 = __importDefault(require("cors"));
const connect_1 = __importDefault(require("../database/connect"));
class Server {
    constructor() {
        this.apiRoutes = {
            usuarios: '/api/usuarios'
        };
        this.authRouter = {
            registrar: '/api/registrar'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.dbConnect();
        this.middlewares();
        this.routes();
    }
    routes() {
        this.app.use(this.authRouter.registrar, auth_routes_1.default);
        this.app.use(this.apiRoutes.usuarios, usuarios_routes_1.default);
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connect_1.default.authenticate();
                console.log('database activa');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('El servidor estas corriendo en el puerto', this.port);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map