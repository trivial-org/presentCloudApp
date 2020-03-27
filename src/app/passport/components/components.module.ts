import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GetPassComponent } from './get-pass/get-pass.component';

import { RegUsermsgComponent } from './reg-usermsg/reg-usermsg.component';



@NgModule({
  declarations: [LoginComponent,RegisterComponent,GetPassComponent,RegUsermsgComponent],
  imports: [ CommonModule, FormsModule, IonicModule,RouterModule],
  exports:[LoginComponent,RegisterComponent,GetPassComponent,RegUsermsgComponent]
})
export class ComponentsModule { }
