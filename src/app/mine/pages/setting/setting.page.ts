import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../../service/local-storage.service';

import { HttpserviceService } from '../../../service/httpservice.service'; 
import { NavController , NavParams } from '@ionic/angular';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  public logoutapi:any="/signout";
  constructor(public httpclient:HttpserviceService,public navCtrl: NavController,public localStorageService:LocalStorageService) { }

  ngOnInit() {
  }

  //登出
  logout(){
    console.log({'userName':this.localStorageService.get('userName',null)})
    this.httpclient.upData(this.logoutapi,{'userName':this.localStorageService.get('userName',null)}).then((response)=>{
      console.log(response)
    })
    // //删除token
    // this.localStorageService.remove("token");
    // //
    //  this.navCtrl.navigateForward('/login');
  }

}
