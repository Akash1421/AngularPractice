import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'p2';
} 

 
//Commands to commit changes to the github 
//step 1-->check wheather any changes happened in the project ==> git status 
//step 2-->Add those changes to the local machine repo ==> git add . 
//step 3-->commit those changes by specifying the name of the change ==> git commit -m "change_name" 
//step 4-->push changes using the command ==>git push origin main
