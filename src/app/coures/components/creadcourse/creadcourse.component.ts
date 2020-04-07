import { Component, OnInit } from '@angular/core'; 
import { ModalController } from '@ionic/angular'; 
import { PopoverController } from '@ionic/angular';
import { NavController , NavParams } from '@ionic/angular';
import { GetschoolComponent } from '../getschool/getschool.component';
@Component({
  selector: 'app-creadcourse',
  templateUrl: './creadcourse.component.html',
  styleUrls: ['./creadcourse.component.scss'],
})
export class CreadcourseComponent implements OnInit {

  public currentPopover:any;
  public user:any={

  };
  
  constructor(public modalCtrl:ModalController,public popoverController: PopoverController) { }

  ngOnInit() {}

  createcourse()
  {
    this.modalCtrl.dismiss({
      'dismissed': true
    }) 
  }
  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: GetschoolComponent,
  //     event: ev,
  //     backdropDismiss:true,
  //     translucent: true
  //   });
  //   this.currentPopover=popover;
     
  //   await popover.present();
  //   await popover.onDidDismiss().then((response)=>{
  //       console.log(111)
  //       //这里到时候刷新页面
  //   })
  // } 

  async presentPopover() {
    const modal = await this.modalCtrl.create({
      component: GetschoolComponent
    });
    
    await modal.present();
    const{data}=await modal.onDidDismiss();
    console.log(data);
    // await modal.onDidDismiss().then(()=>{
    //   this.popoverController.dismiss();
    // }
    // )
  } 
}
