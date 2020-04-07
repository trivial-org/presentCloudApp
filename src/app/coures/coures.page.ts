import { Component, OnInit,ChangeDetectionStrategy, ChangeDetectorRef,OnDestroy,Input,Output,EventEmitter} from '@angular/core';

import { ModalController } from '@ionic/angular'; 
import { PopoverController } from '@ionic/angular';
import { AddcouresComponent } from './components/addcoures/addcoures.component';
import {HttpClient} from '@angular/common/http'; 
import { NavController , NavParams } from '@ionic/angular';
@Component({
  selector: 'app-coures',
  templateUrl: './coures.page.html',
  styleUrls: ['./coures.page.scss'],
})
export class CouresPage implements OnInit {
  public currentPopover:any = null;
  public type:any=1;
  constructor(public modalController: ModalController,public popoverController: PopoverController,public navCtrl: NavController ) {

  }
  public coures:any={
    id:11611
  }
  ngOnInit() {
  }
  typechang(type:any)
  {
    this.type=type;
    if(type==1)
    {
      //获取我创建的课程
    }
    else if(type==2)
    {
      //获取我加入的课程
    }
  }
  gocourse(id:any){
    console.log(id);
    //通过路由传参，跳转到课程详情页面
  } 

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: AddcouresComponent,
      event: ev,
      backdropDismiss:true,
      translucent: true
    });
    this.currentPopover=popover;
     
    await popover.present();
    await popover.onDidDismiss().then((response)=>{
        console.log(111)
        //这里到时候刷新页面
    })
  } 

  goteacher()
  {
    this.navCtrl.navigateForward('/teachercourse');
  }
  coursedetail(){
    this.navCtrl.navigateForward('/coursemanage');
  } 
  // async coursedetail() {
  //   const modal = await this.modalController.create({
  //     component: CoursemanagePage
  //   });
    
  //   await modal.present();
  //   // await modal.onDidDismiss().then(()=>{
  //   //   this.popoverController.dismiss();
  //   // }
  //   // )
  // } 
  
}
