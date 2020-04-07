import { Component, OnInit,ChangeDetectionStrategy, ChangeDetectorRef,OnDestroy,Input,Output,EventEmitter} from '@angular/core';
import { HttpserviceService } from '../../../service/httpservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  @Output() public outer = new EventEmitter<any>();
 
  public verimage=this.httpclient.ip+"/verification/code";
  public mailcodeapi="/verification/mail?email=";
  public signupapi="/signup";
  public timer:any;
  public tab = 'tab1';  
  public mail:any='';
  public user:any={
    userName:'',
    password:'',
    email:'',
    mailVerificationCode:'',
    verificationCode:''
  }  
  public timelimit:any=60;
  public flag:any = true;
  constructor(public ref : ChangeDetectorRef,public httpclient:HttpserviceService) { }

  ngOnInit() {
    console.log(this.verimage)
    document.getElementById('vericode').src=this.verimage;
  }
  public nums:any=1;//['1','2','3','4','5','6','7','8','9','a','b','c']
 
  newcode()
  {  
    document.getElementById('vericode').src=this.verimage+'?'+this.nums;
    this.nums++;
  }
  usermsg()
  {
    //提交数据并返回

    //跳转到填写信息页面
    this.outer.emit(4);
  }

  register(){
    //提交数据 注册
    console.log(this.user)
    this.httpclient.upData(this.signupapi,this.user).then((response)=>{
      console.log(response)
      //注册完去登录  这里没提示 后面再优化体验
      //判断成功才可以跳去登录
      this.outer.emit(1);
    })
  }
  forgetPass()
  {
    this.outer.emit(3);
  }
  //登录
  login(type:any){
    if(type==1)
    {
      this.user.type=1;
    }else{
      this.user.type=2;
    }
    console.log(this.user)
  }
  // 获取验证码
  get_check_code() {
    this.httpclient.get(this.mailcodeapi+this.user['email']).then((response)=>{
       
    
    //let cookie =response.headers['Set-Cookie']
    console.log(response)
    })
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
}
