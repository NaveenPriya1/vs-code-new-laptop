import { asNativeElements, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    name:string="Naveen";
    url:string="http://www.google.com";
    imageurl:string="https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png";
    imageurl1:string="https://png.pngtree.com/element_our/sm/20180524/sm_5b072d393d61e.jpg";
    stylebind:string="mistyrose";

    products=[
      {name:"pencil",price:900,availabe:"jan",rating:4.5},
      {name:"pen",price:800,availabe:"feb",rating:4.0},
      {name:"sketch",price:300,availabe:"dec",rating:4.5},
      {name:"scale",price:100,availabe:"june",rating:3.5},
      {name:"eraiser",price:90.0,availabe:"jan",rating:3.7},
      {name:"stencil",price:499,availabe:"april",rating:4.3}
  ]

  flag=false;
  show(){
  this.flag=!this.flag;
  }
}
