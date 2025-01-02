import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {  
   
 //!------------------------------------------->STRINGINTERPOLATION--AND--PROPERTYBINDING<------------------------------------------------------------!
 location:string[] = ["Kolkata","Bombay","Hyderabad"]; 
 name:string[] =["Kevin","Phil","Erling"]; 
 Age:number[] =[21,30,10]; 
  
 number1:number = 10; 
 number2:number = 20; 
 imageUrl:string ='data:image/jpeg;base64,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';
 isDisable:boolean=true  
    

 //!------------------------------------------->CLASS_BINDING<------------------------------------------------------------! 
 isActive:boolean = false;  
 constructor() {
  // Bind the function to the global window object
  (window as any).changeColor = this.changeColor; 
  (window as any).styleVar = this.changeBackground;
}
 changeColor():void{ 
 this.isActive= true; 
  
 }   
  
 fruitName:string='apple'; 
  
  
 //!------------------------------------------->STYLE_BINDING<------------------------------------------------------------!  
 styleVar:boolean = false;  
 changeBackground(){ 
  this.styleVar = true;
 } 
  
  //!------------------------------------------->EVENT_BINDING<------------------------------------------------------------!   
 
  clickedButton(){ 
    console.log("button clicked");
  }
 
  mouseHover(){ 
    console.log("mouse hovered")
  } 
   
  eneterdKey(){ 
    console.log("key pressed")
  } 
   
  enterKey(event:any){  
    console.log(event.keyCode)

  }



 



}
