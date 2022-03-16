import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'emiSummaryComponent',
  templateUrl: './emisummary.component.html',
  styleUrls: ['./emisummary.component.css']
})
export class EmisummaryComponent implements OnInit {

  @Input()
  emi:number=0;

  @Input()
  interest:number=0;

  @Input()
  total:number=0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
