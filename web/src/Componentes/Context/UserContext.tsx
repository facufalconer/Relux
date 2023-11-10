import {createContext,ReactNode,useState} from "react"


const Context = createContext({})

interface Props {
    children:ReactNode
}


export function UsersContextProvider({children}:Props){
    const [jwt,setJwt] = useState(() => window.sessionStorage.getItem('token'))
    const [userBuscador, setUserBuscador] = useState({
        id: 0,
        nombre: '',
        email: '',
        estado: '',
        createdAt: ''
      })
      const [usuario, setUsuario] = useState()
      const [userId, setUserId] = useState(0)
    return <Context.Provider value={{usuario,setUsuario,userBuscador,setUserBuscador,jwt,setJwt,userId,setUserId}}>{children}</Context.Provider>
}

export default Context