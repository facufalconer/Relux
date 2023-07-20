export type Jwt = {
 token:string | null

}
export type Num = {

    num: string | null
   }
   
export type UserContextType = {
    num: Num
    setNum:(value:Num) => void
    jwt: Jwt
    setJwt:(value:Jwt) => void
}


