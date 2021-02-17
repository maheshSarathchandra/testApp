import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationOnePageRoutingModule } from './registration-one-routing.module';

import { RegistrationOnePage } from './registration-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationOnePageRoutingModule
  ],
  declarations: [RegistrationOnePage]
})
export class RegistrationOnePageModule {}
