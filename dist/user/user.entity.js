import crypto from 'node:crypto'

export class User{
    constructor(name, address, phoneNumber, cp, email, id= crypto.randomUUID()){
        this.name=name;
        this.address=address;
        this.phoneNumber=phoneNumber;
        this.cp=cp;
        this.email=email;
        this.id=id;
    }
}
