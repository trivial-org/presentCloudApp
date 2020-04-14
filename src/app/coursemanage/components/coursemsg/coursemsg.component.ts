import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursemsg',
  templateUrl: './coursemsg.component.html',
  styleUrls: ['./coursemsg.component.scss'],
})
export class CoursemsgComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  goout(courseid:any){
    //退出班课 进入课程里列表页面
  }
}
