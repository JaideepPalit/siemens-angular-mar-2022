import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../services/datashare.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './componenta.component.html',
  styleUrls: ['./componenta.component.css']
})
export class ComponentaComponent implements OnInit {

  constructor(private dataService:DataShareService) { }

  ngOnInit(): void {
  }

  push(value:string):void{
    this.dataService.publish(value);
  }
}
