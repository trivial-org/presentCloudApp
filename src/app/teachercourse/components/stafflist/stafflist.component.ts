import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; 
import { PopoverController } from '@ionic/angular';
import { RecordComponent } from '../record/record.component';  
import { HttpserviceService } from '../../../service/httpservice.service';  

import { UsermsgserviceService } from '../../../service/usermsgservice.service';  
import { StumsgComponent } from '../stumsg/stumsg.component';

@Component({
  selector: 'app-stafflist',
  templateUrl: './stafflist.component.html',
  styleUrls: ['./stafflist.component.scss'],
})
export class StafflistComponent implements OnInit {

  public membersapi:any='/cloudClass/members?orgCode=';
  public orgCode:any=this.userservice.getorgCode();
  public members:any=[];
  public size:any;
  constructor(public userservice:UsermsgserviceService,public httpservice:HttpserviceService,public modalController: ModalController,public popoverController: PopoverController ) {}

  ngOnInit() {
    this.httpservice.get(this.membersapi+this.userservice.getorgCode()).then((response)=>{
      if(response['state']=='success')
      {
        this.members=response['result']
        this.size=this.members.length
      }
      console.log(response)
    })
  }

  //跳转到  签到组件 的模态框
  daorecord()
  {

  }
//模态框获取  获取学生详情
  stumsg(){

  }
  async gorecord() {
  
    const modal = await this.modalController.create({
      component: RecordComponent
    });
    
    await modal.present();
    // await modal.onDidDismiss().then(()=>{
    //   this.popoverController.dismiss();
    // }
    // )
  } 
  async studetail()
  {
    //进入学生页面  带着学生id  模态框传值把
    const modal = await this.modalController.create({
      component: StumsgComponent
    });
    
    await modal.present();
  }
}
