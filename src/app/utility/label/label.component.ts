import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'label-component',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  constructor() {
    this.message="text here";
  }

  ngOnInit(): void {
  }

  @Input()
  message:string;
}
