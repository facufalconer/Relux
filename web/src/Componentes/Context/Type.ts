export type Jwt = {
 token:string | null

}
export type Num = {

    id: number,
    nombre: string,
    email: string,
    estado: string,
    createdAt: string
   }
   export type Usuario = {
    emailUser:string
   }
   export type IdUser = {
    iduser:any | null
   
   }
export type UserContextType = {
    userBuscador: Num
    setUserBuscador:(value:Num) => void
    jwt: Jwt
    setJwt:(value:Jwt) => void
    usuario: Usuario
    setUsuario: (value:Usuario) => void
    userId:IdUser
    setUserId:(value:IdUser ) => void
}


