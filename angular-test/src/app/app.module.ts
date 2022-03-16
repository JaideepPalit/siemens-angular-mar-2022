import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationModule } from './communication/communication.module';
import { EmicalculatoruiModule } from './emicalculatorui/emicalculatorui.module';
import { EMICalculatorService } from './services/emiCalculator.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmicalculatoruiModule,
    CommunicationModule
  ],
  providers: [
    {provide:EMICalculatorService,useClass:EMICalculatorService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
