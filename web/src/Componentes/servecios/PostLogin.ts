import { useMutation } from "react-query";
import axios from "axios";
export default function login ({email,password}:any) {
   return axios.post('http://localhost:8000/api/registrar/signin',{
    email:email,
    password:password
})
.then (res => {
     const jwt = res.data.token
   return jwt
   })   
} 
