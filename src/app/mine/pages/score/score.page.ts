import { Component, OnInit } from '@angular/core';
import { UsermsgserviceService } from 'src/app/service/usermsgservice.service';
import { HttpserviceService } from 'src/app/service/httpservice.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
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
