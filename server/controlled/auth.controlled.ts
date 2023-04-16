import { Request,Response } from "express"
import Register from "../models/register"
import jwt from 'jsonwebtoken'
import { compare, encrypt } from "../handleBrycryp/handleBcrypt"

export const signup = async (req:Request,res:Response) => {
   const {nombre,password,email} = req.body
   try{
    const existeEmail = await Register.findOne({
       where:{
           email: email
       }
       
    })
    if(existeEmail){
       return res.status(400).json({
         message:'email existente'  
       })
    }
    
    const passwordHash = await encrypt(password)
    const register = await Register.create({
       nombre:nombre,
       email:email,
       password:passwordHash
    })
  
    const saveRegisnter = await register.save();
   const token =jwt.sign({_id:saveRegisnter},process.env.TOKEN_SECRET || 'TOKEN')
    res.status(200).json({
       message:'El registro se agrego correctamente',
       token
    })
   }catch (error){
      res.status(500).json({
       message:'por favor hable con el administrador'
      })
   }

}


export const signip = async (req:Request,res:Response) => {

  const {body} = req
  try{
   const existeEmail = await Register.findOne({
      where:{
          email: body.email
      }
      
   })
   if(existeEmail){
      return res.status(200).json({
        message:'usuario correcto'  
      })
   }

   const register = await Register.create({
      nombre:body.nombre,
      email:body.email,
      password:body.password
   })
   const passwordHash = await compare(body.password,register.password)
   await(await register).save();
   res.status(200).json({
      message:'El registro se agrego correctamente'
   })
  }catch (error){
     res.status(500).json({
      message:'por favor hable con el administrador'
     })
  }
}

export const profile =  async (req:Request,res:Response) => {
  const register = await Register.findAll()
    
  res.json(register)
}