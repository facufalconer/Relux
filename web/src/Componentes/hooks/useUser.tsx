
import { UserContextType } from '../Context/Type';
import UserContext from '../Context/UserContext'
import React, { useState,useContext,useCallback } from "react";
import LoginService from '../servecios/PostLogin'
import { useNavigate } from 'react-router-dom';

export default function useUser (){
    const {jwt,usuario,setUsuario,setJwt}:any = useContext(UserContext) as UserContextType
    const [state,setState] = useState({loading:false,error:false})
    const navigate = useNavigate() 
    const login = useCallback((email:any,password:any) => {
        LoginService({email,password})
        .then(jwt => {
            window.sessionStorage.setItem('token',jwt.data.token)
            setState({loading:false,error:false})
            setJwt(jwt.data.token)
           if(jwt.status === 200){
            navigate('/Formulario')
           }
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
      navigate('/')
    },[setJwt])

    return{
        login,
        logout,
        isLogged: Boolean(jwt),
        isLogerLoading: state.loading,
        hasLoginError:state.error,
    }
}