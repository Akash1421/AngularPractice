import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [NgIf,NgTemplateOutlet,NgFor,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
[x: string]: any;  
  logincountbutton:number = 0; 
  isdisabled:boolean = false
   
  loginCount(){ 
    this.logincountbutton++; 
    console.log(this.logincountbutton)  
    if(this.logincountbutton >= 3){ 
      this.isdisabled = true
    }

  } 
   
  //if-else using string values 
  userRole:string = 'Member'; 
   
  //ng-for  
  names:Array<string> = ['Kevin','Phil','stu','Alan']; 
   
  //ng-for on objects 
  userDetails:Array<any> = [ 
    {id:1,name1:"Haaland",age:23}, 
    {id:2,name1:"Foden",age:21}, 
    {id:3,name1:'Silva',age:29}
  ]   
  value1:string=""; 
  
   
  addNewUser1(value:string){ 
    this.names.push(value);
  } 
  constructor(){ 
    let totalLength = this.names.length;
  }

  addNewUser(){ 
    let user:object= {id:4,name1:'user1',age:30}; 
      this.userDetails.push(user)
  } 
   
  onDelete(user1:object){  
    let index:number = this.userDetails.indexOf(user1)
    this.userDetails.splice(index,1)
  } 
   
  deleteUser(index:number){   
    this.names.splice(index,1)

  }

}
