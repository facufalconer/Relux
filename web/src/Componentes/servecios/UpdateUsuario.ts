
export default function UpdateUsuario (jwt:any,id:any) {
    fetch(`http://localhost:8000/api/usuarios/${id}`,{
        method:'GET',
        headers:{
            authorization:jwt
         }
    })
    .then(res => res.json())
    .then(res =>{ const Usuario = res.data
    return Usuario.nombre,Usuario.email
    })
}