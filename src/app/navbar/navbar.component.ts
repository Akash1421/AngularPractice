import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgIf,NgTemplateOutlet,NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {  
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

}
