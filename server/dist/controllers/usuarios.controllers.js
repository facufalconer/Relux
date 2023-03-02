"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuarios = exports.putUsuarios = exports.postUsuarios = exports.getUsuario = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => {
    res.json({
        message: 'getUsuarios'
    });
};
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'getUsuario',
        id
    });
};
exports.getUsuario = getUsuario;
const postUsuarios = (req, res) => {
    const { body } = req;
    res.json({
        message: 'postUsuarios',
        body
    });
};
exports.postUsuarios = postUsuarios;
const putUsuarios = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        message: 'putUsuarios',
        body,
        id
    });
};
exports.putUsuarios = putUsuarios;
const deleteUsuarios = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'deleteUsuarios',
        id
    });
};
exports.deleteUsuarios = deleteUsuarios;
//# sourceMappingURL=usuarios.controllers.js.map