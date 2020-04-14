import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-addactive',
  templateUrl: './addactive.component.html',
  styleUrls: ['./addactive.component.scss'],
})
export class AddactiveComponent implements OnInit {

  public type:any='作业';
  constructor(public modalController: ModalController,public navParams: NavParams) {
    //this.navParams 通过这个获取父页面的传值
    // console.log(this.navParams);   
}

  ngOnInit() {}
  creatactive(){
    //把数据提交

    //如果懒加载 这里可以提前获取新的列表  或者把数据返回回去插入
    //提交成功就返回
    this.modalController.dismiss({
      result:'ok'
    });
  }

}
