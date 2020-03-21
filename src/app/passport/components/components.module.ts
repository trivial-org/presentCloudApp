import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GetPassComponent } from './get-pass/get-pass.component';



@NgModule({
  declarations: [LoginComponent,RegisterComponent,GetPassComponent],
  imports: [ CommonModule, FormsModule, IonicModule,RouterModule],
  exports:[LoginComponent,RegisterComponent,GetPassComponent]
})
export class ComponentsModule { }
