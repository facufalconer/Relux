"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controlled_1 = require("../controlled/auth.controlled");
const routerAuth = (0, express_1.Router)();
routerAuth.post('/signup', auth_controlled_1.signup);
routerAuth.post('/signin', auth_controlled_1.signip);
routerAuth.get('/profile/:email', auth_controlled_1.profile);
exports.default = routerAuth;
//# sourceMappingURL=auth.routes.js.map