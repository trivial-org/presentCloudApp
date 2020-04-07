import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setupaccount',
  templateUrl: './setupaccount.page.html',
  styleUrls: ['./setupaccount.page.scss'],
})
export class SetupaccountPage implements OnInit {

  constructor() { }
  public user:any={
    name:'',
    nickname:'',
    birthday:'',
    gender:'',
    role:'',
    SID:'',
    TID:''
  }  
  ngOnInit() {
  }

}
