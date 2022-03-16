import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentaComponent } from './componenta/componenta.component';
import { ComponentbComponent } from './componentb/componentb.component';
import { DataShareService } from './services/datashare.service';



@NgModule({
  declarations: [
    ComponentaComponent,
    ComponentbComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ComponentaComponent,
    ComponentbComponent
  ],
  providers:[
    DataShareService
  ]
})
export class CommunicationModule { }
