import axios from "axios";
export default function DeleteUsuarios (id:any) {
   
   return axios.delete(`http://localhost:8000/api/usuarios/${id}`)
  
} 