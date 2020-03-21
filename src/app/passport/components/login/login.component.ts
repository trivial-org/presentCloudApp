import { Component, OnInit,ChangeDetectionStrategy, ChangeDetectorRef,OnDestroy,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @Output() public outer = new EventEmitter<any>();
 
  public timer:any;
  public tab = 'tab1';  
  public user:any={
    type:'',
    phone:'',
    password:'',
    checkCode:''
  }  
  public timelimit:any=60;
  public flag:any = true;
  constructor(public ref : ChangeDetectorRef) { }

  ngOnInit() {
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
