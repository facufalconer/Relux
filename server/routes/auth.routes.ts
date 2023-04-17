import {Router} from 'express'
import { signup,signip,profile } from '../controlled/auth.controlled'
const routerAuth: Router = Router()



routerAuth.post('/signup',signup)
routerAuth.post('/signin',signip)
routerAuth.get('/profile',profile)

export default routerAuth