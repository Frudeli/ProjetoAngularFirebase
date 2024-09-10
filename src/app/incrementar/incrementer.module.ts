import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementarComponent } from './incrementar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    IncrementarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [
    IncrementarComponent
  ]
})
export class IncrementerModule { }
