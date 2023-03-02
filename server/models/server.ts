import express,{Application} from 'express';
import userRoutes from '../routes/usuarios.routes'
import cors from 'cors'
import db from '../database/connect';

export class Server{
    private app: Application;
    private port: string;
    private apiRoutes ={
      usuarios:'/api/usuarios'
    }
    constructor(){
        this.app = express();
        this.port= process.env.PORT || '8000'
        this.dbConnect()
        this.middlewares()
        this.routes()
    }
    routes(){
      this.app.use(this.apiRoutes.usuarios,userRoutes)
    }
    async dbConnect(){
      try {
        await db.authenticate();
        console.log('database activa')
      } catch (error:any) {
        throw new Error(error)
      }
    }
    
    middlewares(){
      this.app.use(cors())
      this.app.use(express.json())
      this.app.use(express.static('public'))
    }
  listen(){
    this.app.listen(this.port, ()=>{
        console.log('El servidor estas corriendo en el puerto',this.port);
    })
  }
}