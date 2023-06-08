import axios from "axios";
export default function getUsuarios () {
   
   return axios.get('http://localhost:8000/api/usuarios')
.then (res => {
     const usuarios = res.data
  return usuarios
   })   
} 