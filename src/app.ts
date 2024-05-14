import express from 'express'
import {User} from './user.js'
import JSON5 from 'json5'


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


//get all
app.get('/api/users',(req,res)=>{
  res.json(users)
})

///get one
app.get('/api/users/:id',(req, res)=>{
  const user = users.find((user)=>user.userID===req.params.id)
  if(!user){
    res.status(404).send({message:'User not found'})
  }
  res.json(user)
})

// post
//user -> request -> express -> middleware que forme un req.body (express.json()) -> app.post (req.body) -> response -> user
app.post('api/users', (req,res)=>{
  const {name, address, phoneNumber, cp, email}= req.body

  const user= new User (name, address, phoneNumber, cp, email)

  users.push(user)
res.status(201).send({message:'Usuario creado', data:user})

})

//server
app.listen(3000, ()=>{
  console.log("Server running on http://localhost:3000/")
})