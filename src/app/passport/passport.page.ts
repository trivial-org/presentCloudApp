import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.page.html',
  styleUrls: ['./passport.page.scss'],
})
export class PassportPage implements OnInit {

  //type==1 登录  2 注册  3 忘记密码
  @Input() type:any=1;
  constructor() { }

  ngOnInit() {
  }

  runParent(msg:any)
  {
    this.type=msg;
  }
}
