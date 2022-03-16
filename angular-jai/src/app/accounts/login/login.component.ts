import { Component, OnInit } from '@angular/core';
import { ConsoleLoggerService } from 'src/app/services/consoleLogger.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private loggerSerivice:ConsoleLoggerService) { 
    this.username="";
    this.password="";
  }

  onUsernameEdit(value:string):void{
    this.username=value;

  }

  onPasswordEdit(value:string):void{
    this.password=value;
  }
  login():void{
    this.loggerSerivice.write(`${this.username},${this.password}`);
  }
  ngOnInit(): void {
  }

  clear():void{
    this.username="";
    this.password="";
  }
}
