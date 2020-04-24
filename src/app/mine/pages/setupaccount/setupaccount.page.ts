import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UsermsgserviceService } from 'src/app/service/usermsgservice.service';
import { HttpserviceService } from 'src/app/service/httpservice.service';
import { NavController, ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-setupaccount',
  templateUrl: './setupaccount.page.html',
  styleUrls: ['./setupaccount.page.scss'],
})
export class SetupaccountPage implements OnInit {

  constructor(public toastController: ToastController, public ref: ChangeDetectorRef, public usermsg: UsermsgserviceService, public httpclient: HttpserviceService, public navCtrl: NavController, public actionsheetController: ActionSheetController, public alertController: AlertController) { }
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
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '提示信息!',
      message: '您确定要保存资料更改吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确定',
          handler: () => {
            this.save();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentToast_suc() {
    const toast = await this.toastController.create({
      message: '保存成功.',
      duration: 2000,
      cssClass: 'mytoast',
      color: 'light'
    });
    toast.present();
  }
  async presentToast_fla() {
    const toast = await this.toastController.create({
      message: '保存失败.',
      duration: 2000,
      cssClass: 'mytoast',
      color: 'light'
    });
    toast.present();
  }
  formatDate = (time: any) => {
    // 格式化日期，获取今天的日期
    const Dates = new Date(time);
    const year: number = Dates.getFullYear();
    const month: any = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
    const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
    return year + '-' + month + '-' + day;
  };
  save() {
    this.user['birthDate'] = this.formatDate(this.user['birthDate']);
    console.log(this.user);
    this.httpclient.put(this.saveusermsgapi, this.user).then((response) => {
      console.log(response)
      if (response['state'] == 'success') {
        this.usermsg.setmod("yes");
        this.navCtrl.navigateForward('/tabs');
        this.presentToast_suc();
      } else {
        //提示信息错误
        this.presentToast_fla();
      }
    })
  }
}
