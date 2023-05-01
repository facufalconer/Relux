import axios from "axios";
export default function PostUsuario (jwt:any) {
   return axios.post('http://localhost:8000/api/usuarios',{
    method:'GET',
    headers:{
       authorization:jwt
    }
})   
} 
