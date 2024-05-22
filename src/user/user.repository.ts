import { repository } from "../shared/repository.js";
import { User } from "./user.entity.js";

const users = [
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

export class UserRepository implements repository <User>{
  public findAll(): User[] | undefined {
    return users
  }

  public findOne(item: { id: string; }): User | undefined {
    return users.find((user)=>user.id===item.id)
  }

  public add(item: User): User | undefined {
    users.push(item)
    return item
  }

  public update(item: User): User | undefined {
    const userIDx=users.findIndex(user=>user.id===item.id)

  if(userIDx !== -1){
      users[userIDx]={...users[userIDx], ...item}
  }
  return users[userIDx]
  }
  public delete(item: { id: string; }): User | undefined {
    const userIDx = users.findIndex((user) => user.id === item.id)
  
    if(userIDx !== -1) {
      const deletedUsers = users[userIDx]
      users.splice(userIDx, 1)
      return deletedUsers
    }



  
}
}