import bcrypt from 'bcrypt' 

export const encrypt = async (texthash:string) =>{
 const hash = await bcrypt.hash(texthash,10)
 return hash
}

export const compare = async (texthash:string,tesxtplain:string) =>{
    const hash = await bcrypt.compare(texthash,tesxtplain)
    return hash
   }