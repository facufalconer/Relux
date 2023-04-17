import {Request , Response,NextFunction} from 'express'
import jwt from 'jsonwebtoken'

export const auntRouter = ( req:Request,res:Response,next:NextFunction) =>{
    const token = req.header('auth-token')
    if(!token) return res.status(401).json('Access denegado')

    const payload = jwt.verify(token,process.env.TOKEN_SECRET || 'TOKEN' )
    next()
}