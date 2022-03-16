import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataShareService } from '../services/datashare.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './componentb.component.html',
  styleUrls: ['./componentb.component.css']
})
export class ComponentbComponent implements OnInit,OnDestroy {

  constructor(private dataService:DataShareService) { }

  record=new Array<string>();
  private obs:any=null;
  ngOnInit(): void {
    this.obs=this.dataService.getObservable();
    this.obs.subscribe((data:string)=>{

      this.record.push(data);
    })
  }

  ngOnDestroy(): void {
    this.obs.unsubscribe();
  }

}
