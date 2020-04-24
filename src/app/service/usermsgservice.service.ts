import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsermsgserviceService {

  private account:any='';
  private email:any='';
  private modify:any='';
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
  setmod(is:any)
  {
    this.modify=is;
  }
  getmod(){
    return this.modify;
  }
  getaccount(){
    return this.account;
  }
  constructor() { }
}
