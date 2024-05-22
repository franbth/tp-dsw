import express, { NextFunction, Request, Response } from 'express'
import {User} from './user/user.entity.js'


const app = express()
app.use(express.json())

const users=[
  new User(
    'Francisco Buthet',
    'Montevideo 749',
    '3416834800',
    '2000',
    'franciscobuthet@gmail.com', 
  ),
  new User(
    'Alejo Passe',
    'Pellegrini y Francia',
    '3476651208',
    '2000',
    'passealejo@gmail.com'
  )
]

//Validacion
function santizeUserInput(req:Request, res:Response, next:NextFunction){

  req.body.santizedInput={
    name:req.body.name,
    address:req.body.address,
    phoneNumber:req.body.phoneNumber,
    cp:req.body.cp,
    email:req.body.email
  }

  next()
}

//get all
app.get('/api/users',(req,res)=>{
  res.json(users)
})

//get one
app.get('/api/users/:id',(req, res)=>{
  const user = users.find((user)=>user.id===req.params.id)
  if(!user){
    res.status(404).send({message:'User not found'})
  }
  res.json(user)
})

// post
//user -> request -> express -> middleware que forme un req.body (express.json()) -> app.post (req.body) -> response -> user
app.post('/api/users', santizeUserInput, (req,res)=>{
  const input = req.body.santizedInput

  const user= new User (
    input.name, 
    input.address, 
    input.phoneNumber, 
    input.cp, 
    input.email
  )

  users.push(user)
  
  res.status(201).send({message:'Usuario creado', data:user})

})

//put
app.put('/api/users/:id', santizeUserInput, (req,res)=>{
  const userIDx=users.findIndex(user=>user.id===req.params.id)

  if(userIDx===-1){
    res.status(404).send({message:'User not found'})
  }
  
  users[userIDx]={...users[userIDx], ...req.body.santizedInput}

  res.status(200).send({message:'Usuario actualizado', data:users[userIDx]})
})

//delete
app.delete('/api/users/:id', (req, res)=>{
  const userIDx=users.findIndex(user=>user.id===req.params.id)
  
  if(userIDx===-1){
    res.status(404).send({message:'Usuario no encontrado'})
  }

  users.splice(userIDx, 1)
  res.status(200).send({message:'Usuario borrado exitosamente'})
})

//server
app.listen(3000, ()=>{
  console.log("Server running on http://localhost:3000/")
})