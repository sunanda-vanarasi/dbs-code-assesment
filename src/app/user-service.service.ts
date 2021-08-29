import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService{
userObject:any;
addEdit:String;
  constructor() { }

  public getUser(){
return this.userObject;
  }
  public getaddEditUser(){
    return this.addEdit;
  }
}
