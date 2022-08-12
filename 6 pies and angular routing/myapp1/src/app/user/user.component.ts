import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
//inject service 

constructor( private service:DataService) { } 

 
 users:UserClass[]; 
 ngOnInit(): void { 
 this.service.getAllUsers().subscribe(result=>this.users=result); 

} 

 
}
