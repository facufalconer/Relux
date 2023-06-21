import {createContext,ReactNode,useState} from "react"


const Context = createContext({})

interface Props {
    children:ReactNode
}


export function UsersContextProvider({children}:Props){
    const [jwt,setJwt] = useState(() => window.sessionStorage.getItem('token'))
    const [num,setNum] = useState(1)
    return <Context.Provider value={{num,setNum,jwt,setJwt,}}>{children}</Context.Provider>
}

export default Context