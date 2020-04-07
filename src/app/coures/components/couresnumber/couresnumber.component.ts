import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; 
@Component({
  selector: 'app-couresnumber',
  templateUrl: './couresnumber.component.html',
  styleUrls: ['./couresnumber.component.scss'],
})
export class CouresnumberComponent implements OnInit {

  public type:any=1;
  public couresnumbe:any='';
  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {}
  nextadd(){
    this.type=2;
    //通过班课号获取班课信息，展示在页面上
  } 
  addcourse(){
    this.modalCtrl.dismiss({
      'dismissed': true
    })
  }
} 

