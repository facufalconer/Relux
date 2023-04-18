import {Request , Response,NextFunction} from 'express'
import jwt from 'jsonwebtoken'

export const auntRouter = ( req:Request,res:Response,next:NextFunction ) => {
    try{
        const token: any = req.headers.authorization?.split(' ').pop()
        const tokenData = jwt.verify(token, process.env.TOKEN_SECRET || 'TOKEN')
        if(tokenData._id){
            next()
        } else {
            res.status(409)
            res.send({error: 'Tu por aqui no pasas'})
        }
    }catch{
        res.status(409)
        res.send({error:'Tu por aqui no pasas'});
        
    }

}