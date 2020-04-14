import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';  
import { PopoverController } from '@ionic/angular';
import { NavController , NavParams } from '@ionic/angular'; 

import { HttpserviceService } from '../../../service/httpservice.service';
@Component({
  selector: 'app-couresnumber',
  templateUrl: './couresnumber.component.html',
  styleUrls: ['./couresnumber.component.scss'],
})
export class CouresnumberComponent implements OnInit {

  public type:any=1;
  public couresnumbe:any='';
  public addcourseapi:any='/cloudClass/members?orgCode=';
  constructor(public modalCtrl:ModalController,public httpservice:HttpserviceService) { }
  public orgCode:any='';
  ngOnInit() {}
  nextadd(){
    this.httpservice.get(this.addcourseapi+this.orgCode).then((response)=>{
      console.log(response)
    })
    //this.type=2;
    //通过班课号获取班课信息，展示在页面上
  } 
  addcourse(){
    this.modalCtrl.dismiss({
      'dismissed': true
    })
  }
} 

