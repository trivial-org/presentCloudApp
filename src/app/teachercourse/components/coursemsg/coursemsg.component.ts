import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursemsg',
  templateUrl: './coursemsg.component.html',
  styleUrls: ['./coursemsg.component.scss'],
})
export class CoursemsgComponent implements OnInit {

  public type:any=0;
  constructor() { } 
  ngOnInit() {} 
  edit(type:any){
    this.type=type;
    if(type==2)
    {
      //提交编辑数据
      //修改状态
      this.type=0;
    }
  } 
  del(courseid:any)
  {
    //删除班课
  } 
}
