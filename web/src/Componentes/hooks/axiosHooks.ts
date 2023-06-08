import axios, { AxiosHeaders, AxiosRequestConfig } from "axios"
import { UserContextType } from "../Context/Type"
import UserContext from "../Context/UserContext"
import { useContext } from "react"

export const AxiosHooks = (jwt:any) => {


const auth = jwt
   axios.interceptors.request.use((request:any) => {
    request.headers.Authorization = auth
    return request
   })
}