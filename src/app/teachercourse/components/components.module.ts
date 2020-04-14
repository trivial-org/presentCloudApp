import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ActivityComponent } from './activity/activity.component';

import { CoursemsgComponent } from './coursemsg/coursemsg.component';
import { StafflistComponent } from './stafflist/stafflist.component';

import { RecordComponent } from './record/record.component';

import { StumsgComponent } from './stumsg/stumsg.component';

import { AddactiveComponent } from './addactive/addactive.component';

import { ActivedetailComponent } from './activedetail/activedetail.component';
@NgModule({
  declarations: [StafflistComponent,CoursemsgComponent,ActivityComponent,RecordComponent,ActivedetailComponent,StumsgComponent,AddactiveComponent],
  imports: [CommonModule,FormsModule,RouterModule,IonicModule],
  exports:[StafflistComponent,CoursemsgComponent,ActivityComponent,RecordComponent,ActivedetailComponent,StumsgComponent,AddactiveComponent],
  entryComponents:[RecordComponent,StumsgComponent,AddactiveComponent,ActivedetailComponent]
})
export class ComponentsModule { }
