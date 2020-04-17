import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UsermsgserviceService } from 'src/app/service/usermsgservice.service';
import { HttpserviceService } from 'src/app/service/httpservice.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-setupaccount',
  templateUrl: './setupaccount.page.html',
  styleUrls: ['./setupaccount.page.scss'],
})
export class SetupaccountPage implements OnInit {

  constructor(public ref: ChangeDetectorRef, public usermsg: UsermsgserviceService, public httpclient: HttpserviceService, public navCtrl: NavController) { }
  public getusermsgapi = '/user/info';
  public saveusermsgapi = '/user/info';
  public getusermsg: any = [];
  public List: any = {
    eduList: ['小学', '初中', '高中', '中专', '大专', '本科', '研究生'],
  }
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
      this.user = this.getusermsg;
      console.log(this.user)
    })
  }
  ngAfterViewInit() {
    this.username = this.usermsg.getaccount();
    this.httpclient.get(this.getusermsgapi).then((response) => {
      this.getusermsg = response['result']
      console.log(this.getusermsg);
      this.user = this.getusermsg;
      console.log(this.user)
    })
  }

  save() {
    console.log(this.user);
    this.httpclient.put(this.saveusermsgapi, this.user).then((response) => {
      console.log(response)
      if (response['state'] == 'success') {
        this.navCtrl.navigateForward('/tabs/mine');
      } else {
        //提示信息错误
        //this.navCtrl.navigateForward('/mine');
      }
    })
  }
}
