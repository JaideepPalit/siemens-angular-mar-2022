import { Component } from '@angular/core';
import { EMIData } from './services/emiCalculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result:any=null;
  onEmiCalculate(emiResult:EMIData){
    this.result=emiResult;

  }
}
