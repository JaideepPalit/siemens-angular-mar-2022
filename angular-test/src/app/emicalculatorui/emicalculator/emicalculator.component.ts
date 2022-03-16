import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EMICalculatorService,EMIData } from 'src/app/services/emiCalculator.service';

@Component({
  selector: 'emiCalculatorComponent',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent implements OnInit {

  amount:Number=0;
  tenure:Number=0;
  interestRate:Number=0.0;

  @Output()
  emiResult=new EventEmitter<EMIData>();
  constructor(private emiCalcService:EMICalculatorService) { }

  ngOnInit(): void {
  }

  calculate():void{

    let res=this.emiCalcService.calculate(this.amount,this.tenure,this.interestRate);
    this.emiResult.emit(res);

  }
  clear():void{
    this.amount=0;
    this.tenure=0;
    this.interestRate=0;
  }
}
