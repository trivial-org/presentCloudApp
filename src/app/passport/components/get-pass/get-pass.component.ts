import { Component, OnInit,ChangeDetectionStrategy, ChangeDetectorRef,OnDestroy,Input,Output,EventEmitter} from '@angular/core';

import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-get-pass',
  templateUrl: './get-pass.component.html',
  styleUrls: ['./get-pass.component.scss'],
})
export class GetPassComponent implements OnInit {

  @Output() public outer = new EventEmitter<any>();
 
  public timer:any;
  public tab = 'tab1';  
  public user:any={
    type:'',
    phone:'',
    password:'',
    checkCode:''
  }  
  public type:any=1;
  public timelimit:any=60;
  public flag:any = true;
  constructor(public ref : ChangeDetectorRef,public http:HttpClient) { }

  ngOnInit() {
  }


  register(){
    this.outer.emit(2);
  }
  forgetPass()
  {
    this.outer.emit(3);
  }
  changepass()
  {
    
  }
  //登录
  newpass(){ 
    this.type=2;
    //提交
  }
  // 获取验证码
  get_check_code() {
    var api="http://localhost:8080/test";
    this.http.get(api).subscribe(response=>{
      console.log(response)
    })
    console.log('获取验证码'+this.user.phone)
    //倒计时
    this.flag=false;
    this.timer = setInterval(()=>{
      this.timelimit--;
      if(this.timelimit==0)
      {
        this.timelimit=60;
        this.flag=true;
        clearInterval(this.timer);
      }
      },1000)
    // this.dataService.getCaptchas().subscribe(res => {
    //   this.captchaCodeImg = res.code;
    // });
  }

  //清空数据
  clear(){
    this.user.phone='';
    this.user.password='';
    this.user.checkCode='';
    this.timelimit=60;
    this.flag=true;
    clearInterval(this.timer);
  }

}
