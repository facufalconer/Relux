
import { UserContextType } from '../Context/Type';
import UserContext from '../Context/UserContext'
import React, { useState,useContext,useCallback } from "react";
import LoginService from '../servecios/PostLogin'
import getUsuarios from '../servecios/GetUsuario';

export default function useUser (){
    const {jwt,usuario,setUsuario,setJwt}:any = useContext(UserContext) as UserContextType
    const [state,setState] = useState({loading:false,error:false})
    const login = useCallback((email:any,password:any) => {
        LoginService({email,password})
        .then(jwt => {
            window.sessionStorage.setItem('token',jwt)
            setState({loading:false,error:false})
            setJwt(jwt)
        })
        .catch(err => {
            window.sessionStorage.removeItem('token')
            setState({loading:false,error:true})
            console.error(err)
        })
     
    },[setJwt])
    const logout = useCallback(() => {
        window.sessionStorage.removeItem('token')
        setJwt(jwt)
    },[setJwt])
  const usuarios= useCallback(() => {
    getUsuarios(jwt)
    .then(res => setUsuario(res))
    .catch(err => console.log(err))
  },[jwt,setUsuario])
    return{
        isLogged: Boolean(jwt),
        isLogerLoading: state.loading,
        hasLoginError:state.error,
        login,
        usuarios,
        logout
    }
}