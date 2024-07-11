import express, { NextFunction, Request, Response } from 'express'
import {User} from './user/user.entity.js'
import { UserRepository } from './user/user.repository.js'
import { userRouter } from './user/user.routes.js'

const app = express()
app.use(express.json())

// Solo una línea para agregar un nuevo CRUD
app.use('/api/users', userRouter)

app.use(( _, res )  => {
  return res.status(404).send ({message: 'resorce not found'})
})

app.listen(3000, ()=>{
  console.log("Server running on http://localhost:3000/")
})