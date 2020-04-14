import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; 
import { PopoverController } from '@ionic/angular';
import { AddactiveComponent } from '../addactive/addactive.component';
import { ActivedetailComponent } from '../activedetail/activedetail.component';
import {HttpClient} from '@angular/common/http'; 
import { NavController , NavParams } from '@ionic/angular';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {

  constructor(public modalController: ModalController,public popoverController: PopoverController,public navCtrl: NavController ) {

  }
  public arr:Array<any>=['11','22']
  public modalData:any;
  public type:any='全部';
  ngOnInit() {
    //插在前面
    this.arr.unshift('33')
    console.log(this.arr)
  }

  async addactive() {
    const modal = await this.modalController.create({
      component: AddactiveComponent
    });
    
    await modal.present();
    this.modalData = await modal.onDidDismiss();
    console.log(this.modalData)
  } 

  async activedetail(event:any) {
    const modal = await this.modalController.create({
      component: ActivedetailComponent
    }); 
    await modal.present();
    // this.modalData = await modal.onDidDismiss();
    // console.log(this.modalData)
  } 

  update(even:any){ 
    //通过类型去拿数据   课程号
    console.log(even)
  }
  delect(del:any){
    console.log(11)
  }
}
