import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpserviceService } from 'src/app/service/httpservice.service';
import { NavController } from '@ionic/angular';
 
import { LocalStorageService } from '../../../../../service/local-storage.service'; 
import {Md5} from 'ts-md5';
@Component({
  selector: 'app-changepw',
  templateUrl: './changepw.page.html',
  styleUrls: ['./changepw.page.scss'],
})
export class ChangepwPage implements OnInit {
  public changpwapi:any ='/user/password';
  public verimage=this.httpclient.ip+"/verification/code";
  public nums:any=1;
  public user:any={
    newpassword:'',
    oldpassword:'', 
    id:''
  } 

  
  constructor(public localStorage:LocalStorageService, public ref : ChangeDetectorRef,public httpclient:HttpserviceService,public navCtrl: NavController ) { }

  ngOnInit() {
    console.log(this.verimage)

  }
  ngAfterViewInit(){
    
    document.getElementById('vericode').setAttribute('src',this.verimage+'?'+this.nums);
    this.nums++;
  }

  changepw(){
    this.user['id']=this.localStorage.get('userId',null);
    this.user['newpassword'] = Md5.hashStr(this.user["newpassword"]).toString()
    this.user['oldpassword'] = Md5.hashStr(this.user["oldpassword"]).toString()
    this.httpclient.put(this.changpwapi,this.user).then((response)=>{
      console.log(response);
    })
  }
}