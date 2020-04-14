import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsermsgserviceService {

  private  account:any='';
  setaccount(account:any){
    this.account=account; 
  }
  getaccount(){
    return this.account;
  }
  constructor() { }
}
