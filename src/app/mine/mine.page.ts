import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UsermsgserviceService } from '../service/usermsgservice.service';
import { HttpserviceService } from '../service/httpservice.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.page.html',
  styleUrls: ['./mine.page.scss'],
})
export class MinePage implements OnInit {

  constructor(public ref: ChangeDetectorRef, public usermsg: UsermsgserviceService, public httpclient: HttpserviceService, public navCtrl: NavController) { }

  public getusermsgapi = '/user/info';
  public getusermsg: any = [];
  public user: any = {
    nickname: '',
    gender: '',
    profilePhotoUrl: '',
    studentId: '',
    school: '',
    major: '',
    education: '',
    college: '',
    birthDate: '',
    address: '', city: '', province: '', nation: '',
  }
  public username: any;
  ngOnInit() {
    this.username = this.usermsg.getaccount();
    this.httpclient.get(this.getusermsgapi).then((response) => {
      this.getusermsg = response['result']
      console.log(this.getusermsg);
    })
  }

  ngAfterViewInit() {
    this.username = this.usermsg.getaccount();
    this.httpclient.get(this.getusermsgapi).then((response) => {
      this.getusermsg = response['result']
      console.log(this.getusermsg);
    })
  }
}
