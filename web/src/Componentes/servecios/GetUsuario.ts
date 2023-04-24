import axios from "axios";
export default function getUsuarios (jwt:any) {
   return axios.get('http://localhost:8000/api/usuarios',{
     method:'GET',
     headers:{
        authorization:jwt
     }
})
.then (res => {
     const usuarios = res.data
  return usuarios
   })   
} 
