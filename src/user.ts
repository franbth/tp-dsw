import crypto from 'node:crypto'

export class User{
  constructor(public name:string, 
  public address:string, 
  public phoneNumber:string,
  public cp:string,
  public email:string,
  public userID= crypto.randomUUID() ){}
}