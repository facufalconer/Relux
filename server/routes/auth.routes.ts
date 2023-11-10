import {Router} from 'express'
import { signup,signip,profile } from '../controlled/auth.controlled'
import { auntRouter } from '../middlewares/authprivado'
const routerAuth: Router = Router()



routerAuth.post('/signup',signup)
routerAuth.post('/signin',signip)
routerAuth.get('/profile/:email',profile)

export default routerAuth