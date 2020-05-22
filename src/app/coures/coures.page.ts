import { Component, OnInit,ChangeDetectionStrategy, ChangeDetectorRef,OnDestroy,Input,Output,EventEmitter} from '@angular/core';

import { ModalController } from '@ionic/angular'; 
import { PopoverController } from '@ionic/angular';
import { AddcouresComponent } from './components/addcoures/addcoures.component';
import { HttpserviceService } from '../service/httpservice.service';  
import { UsermsgserviceService } from '../service/usermsgservice.service';  
import { LocalStorageService } from '../service/local-storage.service';
import { NavController , NavParams } from '@ionic/angular';
@Component({
  selector: 'app-coures',
  templateUrl: './coures.page.html',
  styleUrls: ['./coures.page.scss'],
})
export class CouresPage implements OnInit {
  public role:any={
    roleCode:'82112',
    roleName:'晚上加的',
    roleDescription:'字面意思'
  }
  public currentPopover:any = null;
  public type:any=1;
  public getcreatecourseapi:any='/user/createdClass';
  public getaddcourseapi:any='/user/joinedClass';
  public getmyentercourseapi:any='/user/joinedClass';
  public createlist:any=[];
  public addlist:any=[];
  constructor(public localStorageService:LocalStorageService,public userserivce:UsermsgserviceService,public httpclient:HttpserviceService,public modalController: ModalController,public popoverController: PopoverController,public navCtrl: NavController ) {

  }
  public coures:any={
    id:11611
  }
  ngOnInit() {
    console.log(this.localStorageService.get('token',null));
    this.httpclient.get(this.getcreatecourseapi).then((response)=>{
      this.createlist=response['result'] 
      console.log(this.createlist);
    })
    this.httpclient.get(this.getmyentercourseapi).then((response)=>{
      this.addlist=response['result']
      console.log(this.addlist);
    })
  }
  ngAfterViewInit(){
    this.httpclient.get(this.getcreatecourseapi).then((response)=>{
      this.createlist=response['result'] 
      console.log(this.createlist);
    })
    this.httpclient.get(this.getmyentercourseapi).then((response)=>{
      this.addlist=response['result']
      console.log(this.addlist);
    })
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
      this.httpclient.upData('/role',this.role).then((response)=>{
        console.log(response)
        this.httpclient.get('/role?page=1&pageSize=10').then((response)=>{
          console.log(response)
        })
      })
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

  goteacher(orgCode:any)
  {
    console.log(orgCode)
    this.userserivce.setorgCode(orgCode);
    this.navCtrl.navigateForward('/teachercourse');
  }
  coursedetail(){
    //this.userserivce.setorgCode(orgCode);
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
