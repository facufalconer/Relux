import {createContext,ReactNode,useState} from "react"
// import { Jwt } from "./Type"

const Context = createContext({})

interface Props {
    children:ReactNode
}


export function UsersContextProvider({children}:Props){
    const [jwt,setJwt] = useState(() => window.sessionStorage.getItem('token'))
    const [usuario,setUsuario] = useState({})
    return <Context.Provider value={{jwt,usuario,setJwt,setUsuario}}>{children}</Context.Provider>
}

export default Context