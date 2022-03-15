import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor() { 
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
    console.log(this.username,this.password);
  }
  ngOnInit(): void {
  }

  clear():void{
    this.username="";
    this.password="";
  }
}
