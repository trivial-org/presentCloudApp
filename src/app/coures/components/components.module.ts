import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AddcouresComponent } from './addcoures/addcoures.component';
import { CouresnumberComponent } from './couresnumber/couresnumber.component';
import { CreadcourseComponent } from './creadcourse/creadcourse.component';
import { GetschoolComponent } from './getschool/getschool.component';
@NgModule({
  declarations: [AddcouresComponent,CouresnumberComponent,CreadcourseComponent,GetschoolComponent],
  imports: [CommonModule,FormsModule,RouterModule,IonicModule],
  exports:[AddcouresComponent,CouresnumberComponent,CreadcourseComponent,GetschoolComponent],
  entryComponents:[AddcouresComponent,CouresnumberComponent,CreadcourseComponent,GetschoolComponent]
})
export class ComponentsModule { }
