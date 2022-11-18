import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import bcrypt from 'bcrypt'
import * as dotenv from 'dotenv'

dotenv.config()

export const register = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      // Encripta la contraseña que debe tener minimo 8 cáracteres
      password: bcrypt.hashSync(req.body.password, 8)
    })
    res.status(201).json({
      'message': 'User Created',
      'userId': user.id
    })
  } catch (err) {
    console.log(err)
  }
}

export const login = async (req, res) => {
  try {
    
    // Busca el usuario por correo
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    // Si no existe un usuario
    if (!user) {
      return res.status(404).send({
        message: `No user found with email ${req.body.email}`
      })
    }

    // Compara la contraseña enviada con la que está en la base de datos
    const passwordIsValid = bcrypt.compareSync(
      req.body.password, 
      user.password
    )
  
    // Si no es válida
    if (!passwordIsValid) {
      return res.status(401)
        .send({
          message: 'Invalid Password' 
        })
    }

    // Inicia sesion con id de usuario
    const token = jwt.sign({
      id: user.id,
      name: user.name,
    }, 'secret-key', {
      expiresIn: process.env.EXPIRES_IN
    })
    // secret-key should be in .env file

    // RESPUESTA DEL LOGIN
    res.status(200)
      .send({
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
        message: 'Login successfull',
        accessToken: token
      })
  } catch (err) {
    console.log(err)
  }
}