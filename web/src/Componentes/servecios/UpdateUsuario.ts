import axios from "axios"

export default function UpdateUsuario (id:any) {
    axios.get(`http://localhost:8000/api/usuarios/${id}`)
    .then(res =>{ const Usuario = res.data
    return Usuario.nombre,Usuario.email
    })
}