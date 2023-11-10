import axios from "axios";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import { UserContextType } from "../Context/Type";

export default function login ({email,password}:any ) {
   
   return axios.post('http://localhost:8000/api/registrar/signin',{
    email:email,
    password:password
})
.then (res => {
   
     const jwt = res

   return jwt
   })   
} 
