import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { EmisummaryComponent } from './emisummary/emisummary.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmicalculatorComponent,
    EmisummaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    EmicalculatorComponent,
    EmisummaryComponent
  ]
})
export class EmicalculatoruiModule { }
