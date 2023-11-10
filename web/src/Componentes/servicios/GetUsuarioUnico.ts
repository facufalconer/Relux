import axios from "axios";

const getUsuariosunico = async (usuario: any) => {

  const respuesta = await axios.get(`http://localhost:8000/api/registrar/profile/${usuario}`)
  const usuariosId = respuesta.data.id
  const UsuarioData = await axios.get(`http://localhost:8000/api/usuarios/${usuariosId}`)
  return UsuarioData.data
}

export default getUsuariosunico