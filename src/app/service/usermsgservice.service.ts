import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsermsgserviceService {

  private  account:any='';
  private orgCode:any='';
  setorgCode(orgCode:any){
    this.orgCode=orgCode; 
  }
  getorgCode(){
    return this.orgCode;
  }
  setaccount(account:any){
    this.account=account; 
  }
  getaccount(){
    return this.account;
  }
  constructor() { }
}
