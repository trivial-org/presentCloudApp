import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CouresPageRoutingModule } from './coures-routing.module';

import { RouterModule } from '@angular/router';
import { CouresPage } from './coures.page';
import {ComponentsModule} from'./components/components.module' 
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule,
    CouresPageRoutingModule
  ],
  declarations: [CouresPage],
  entryComponents:[]
})
export class CouresPageModule {}
