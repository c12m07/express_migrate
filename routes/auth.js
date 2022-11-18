import express from 'express'
import { register, login } from '../controllers/auth.js'

const AuthRouter = express.Router()

AuthRouter.post('/auth/login', login)
AuthRouter.post('/auth/register', register)

export default AuthRouter