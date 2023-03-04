import { Request,Response } from "express"
import Register from "../models/register"


export const signup = async (req:Request,res:Response) => {
    const {body} = req
    try{
     const existeEmail = await Register.findOne({
        where:{
            email: body.email
        }
        
     })
     if(existeEmail){
        return res.status(400).json({
          message:'Email existent'  
        })
     }
     const register = await Register.create({
        nombre:body.nombre,
        email:body.email,
        password:body.password
     })
   
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