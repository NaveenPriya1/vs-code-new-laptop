import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string="My name is 'Naveen'";
  pi:number=3.1415927;
  a=0.12345;
  b=9876.5423;
  today=new Date();
  object={name:"Naveen",email:"naveen@gm.co",address:"mumbai"};

  //custom pipe
  cust:string="Welcome to the Custom Pipe Example";

}
