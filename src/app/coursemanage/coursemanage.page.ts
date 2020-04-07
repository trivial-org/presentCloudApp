import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursemanage',
  templateUrl: './coursemanage.page.html',
  styleUrls: ['./coursemanage.page.scss'],
})
export class CoursemanagePage implements OnInit {

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
