export type Jwt = {
 token:string | null
}
export type usuarios = {
    nombre:string,
    email:string,
    estado:number
   }
export type UserContextType = {
    jwt: Array<Jwt>
    setJwt:(value:Array<Jwt>) => void
    usuario:Array<usuarios>
    setUsuario:(value:Array<usuarios>) => void
}