import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgIf],
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
  userRole:string = 'Memeber';

}
