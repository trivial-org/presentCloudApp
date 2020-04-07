import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  public ip:any = 'http://47.95.120.250:8080';//"http://localhost:8080"//"http://localhost:8080";
  constructor(public http:HttpClient) { }
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
  // var utils = angular.module('Utils', []);
  //   utils.config(['$httpProvider', config]);
  //   function config($httpProvider) {
  //           $httpProvider.defaults.withCredentials = true;
  //   }

  get(api:any)
  {
    let headers = new HttpHeaders({'Content-Type':'application/json'}) 
    return new Promise((resolve,reject)=>{
      this.http.get(this.ip+api,{withCredentials:true,headers:headers}).subscribe((response)=>{
        console.log(11111) 
        console.log(response)
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
