import { Router } from "express";
import { deleteUsuarios, getUsuario, getUsuarios, postUsuarios, putUsuarios } from "../controlled/usuarios.controllers";
import { auntRouter } from "../middlewares/authprivado";

const router = Router();

router.get('/',auntRouter,getUsuarios)
router.get('/:id',auntRouter,getUsuario)
router.post('/',auntRouter,postUsuarios)
router.put('/:id',auntRouter,putUsuarios)
router.delete('/:id',auntRouter,deleteUsuarios)

export default router