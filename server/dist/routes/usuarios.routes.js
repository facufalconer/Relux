"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controllers_1 = require("../controlled/usuarios.controllers");
const router = (0, express_1.Router)();
router.get('/', usuarios_controllers_1.getUsuarios);
router.get('/:id', usuarios_controllers_1.getUsuario);
router.post('/', usuarios_controllers_1.postUsuarios);
router.put('/:id', usuarios_controllers_1.putUsuarios);
router.delete('/:id', usuarios_controllers_1.deleteUsuarios);
exports.default = router;
//# sourceMappingURL=usuarios.routes.js.map