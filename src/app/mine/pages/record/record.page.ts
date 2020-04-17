import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../../../service/httpservice.service';
import { UsermsgserviceService } from '../../../service/usermsgservice.service';
import { NavController } from '@ionic/angular'; 
@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {
  public addlist:any=[];
  public getmyentercourseapi:any='/user/joinedClass';
  constructor(public userserivce:UsermsgserviceService,public httpclient:HttpserviceService,public navCtrl: NavController) { }

  public user:any={
    
  }
  ngOnInit() {
    this.httpclient.get(this.getmyentercourseapi).then((response)=>{
      this.addlist=response['result']
      console.log(this.addlist);
    })
  }
  ngAfterViewInit(){
    this.httpclient.get(this.getmyentercourseapi).then((response)=>{
      this.addlist=response['result']
      console.log(this.addlist);
    })
  }

}
