import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  public ip:any = 'http://47.95.120.250:8080';//"http://localhost:8080"//"http://localhost:8080";
  constructor(public http:HttpClient) { }
  public headers:any = new HttpHeaders({'Content-Type':'application/json'})
  upData(api:any,data:any){
    let headers = new HttpHeaders({'Content-Type':'application/json'})
    return new Promise((resolve, reject) => {
      this.http.post(this.ip+api, data,{withCredentials:true,headers:headers}).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      })
    })
  }
  setip(ip:any){
    this.ip = ip;
  } 
  put(api:any,data:any){
    console.log(this.ip+api);
    return new Promise((resolve, reject) => {
      this.http.put(this.ip+api,data,{withCredentials:true,headers:this.headers}).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      })
   })
  }
  delete(api:any){
    return new Promise((resolve, reject) => {
      this.http.delete(this.ip+api,{withCredentials:true,headers:this.headers}).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      })
   })
  }
  get(api:any)
  { 
    let headers = new HttpHeaders({'Content-Type':'application/json'}) 
    return new Promise((resolve,reject)=>{
      this.http.get(this.ip+api,{withCredentials:true,headers:headers}).subscribe((response)=>{
        resolve(response);
      },(err)=>{
        reject(err);
      })
    })
  }

  // test()
  // {
  //   var utils = angular.module('Utils', []);
  //   utils.config(['$httpProvider', config]);
  //   function config($httpProvider) {
  //           $httpProvider.defaults.withCredentials = true;
  //   }
  // }
}
