import { Component, OnInit,ChangeDetectionStrategy, ChangeDetectorRef,OnDestroy,Input,Output,EventEmitter} from '@angular/core';

import { NavController , NavParams } from '@ionic/angular';
import { HttpserviceService } from '../../../service/httpservice.service'; 

import { UsermsgserviceService } from '../../../service/usermsgservice.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @Output() public outer = new EventEmitter<any>();
 
  public wrong:any=0;
  public timer:any;
  public tab = 'tab1';  
  public verimage=this.httpclient.ip+"/verification/code"; 
  public loginapi='/signin'
  public nums:any=1; 
  public user:any={
    userName:'',
    password:'',
    verificationCode:''
  }  
  public timelimit:any=60;
  public flag:any = true; 
  constructor(public ref : ChangeDetectorRef,public usermsg:UsermsgserviceService,public httpclient:HttpserviceService,public navCtrl: NavController ) { }

  ngOnInit() {
    console.log(this.verimage)
   
  }
  //不能再onInit里面初始化  因为img实在ngif判断后加入页面的
  ngAfterViewInit(){
    
    document.getElementById('vericode').setAttribute('src',this.verimage+'?'+this.nums);
    this.nums++;
  }


  register(){
    this.outer.emit(2);
  }
  forgetPass()
  {
    this.outer.emit(3);
  }
  //登录
  login(type:any){ 
    //验证提交的数据
    this.wrong=0;
    //提交数据
    this.httpclient.upData(this.loginapi,this.user).then((response)=>{
      //判断返回结果
      if(response['state']=='success')
      { 
        //保存账号
        this.usermsg.setaccount(this.user.userName) 
        //对跳转  附带参数
        this.navCtrl.navigateForward('/tabs/coures');
      }else{
        //提示登录信息错误
        this.wrong=1;
      }
      //错 根据返回信息进行提示
      console.log(response);
    })
    //提交
  }
  // 获取验证码
  get_check_code() {
    // var api="http://localhost:8080/test";
    // this.httpclient.get(api).then((response)=>{
    //   console.log(response)
    // })
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

  newcode()
  {  
    document.getElementById('vericode').setAttribute('src',this.verimage+'?'+this.nums);
    //document.getElementById('vericode').src=this.verimage+'?'+this.nums;
    this.nums++;
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
