import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachercourse',
  templateUrl: './teachercourse.page.html',
  styleUrls: ['./teachercourse.page.scss'],
})
export class TeachercoursePage implements OnInit {

  public show:any='staff';
  public type:any=1;
  constructor() { }

  ngOnInit() {
  }

  changetype(type:any)
  {
    this.type=type;
  }
}
