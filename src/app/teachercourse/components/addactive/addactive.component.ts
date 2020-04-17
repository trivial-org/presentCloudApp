import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
@Component({
  selector: 'app-addactive',
  templateUrl: './addactive.component.html',
  styleUrls: ['./addactive.component.scss'],
})
export class AddactiveComponent implements OnInit {

  public type:any='作业';
  constructor(private fileChooser: FileChooser,public modalController: ModalController,public navParams: NavParams) {
    //this.navParams 通过这个获取父页面的传值
    // console.log(this.navParams);   
}

upfile()
{
  // this.fileChooser.open().then(uri => {
  // 	// uri 文件的路径
  // 	console.log(uri)
  // }).catch(e => console.log(e));
  this.fileChooser.open().then(uri => {
    // uri 文件的路径

// 你会发现通过此插件，选择图片文件跟选择其他文件(.doc/.xlsx/.docx/.ppt ...)，获得的uri是有区别的
// 图片文件路径：content://media/....
// 其他文件路径：file:///storage/....

    // 因此将图片文件转换成实际路径，或者叫绝对路径
    (<any>window).FilePath.resolveNativePath(uri, (result) => {
      // this.util.tip(result);
      // // 调用文件上传(此方法需要自行编写)
      // this.uploadAttachment(result);
    });
  })
  .catch(e => console.log(e)); 
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
