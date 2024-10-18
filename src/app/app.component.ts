import { Component, AfterViewChecked, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FirstComponentComponent } from './first-component/first-component.component'; 
// import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import { WishComponent } from "./wish/wish/wish.component";
import { ContactComponent } from './contact/contact.component';



@Component({
  selector: 'app-root', // The custom HTML tag for this component
  standalone: true, // Allows the component to be standalone without a module
  imports: [
    RouterOutlet,
    FormsModule,
    FirstComponentComponent,
    HttpClientModule,
    WishComponent,
    ContactComponent,
    RouterLink,
    RouterLinkActive
], // Imports other Angular features like RouterOutlet
  templateUrl: './app.component.html', // Link to the component's template
  styleUrl: './app.component.css', // Link to the component's style,
  providers: []
})


export class AppComponent implements OnInit{
  @ViewChild(FirstComponentComponent) firstComponent!: FirstComponentComponent;

  profileName: string = 'Ahmad Azmi';

  colors = ['btn btn-info btn-lg', 'btn btn-warning btn-lg', 'btn btn-primary btn-lg'];

  buttonColor: string = this.colors[2];

  count: number = 0;

  changeButtonColor(){
    this.buttonColor = this.colors[this.count];
    this.count++;
    if(this.count >= this.colors.length){
      this.count = 0;
    }
  }

  ngAfterViewChecked(): void{
    this.firstComponent.profileNameChild = this.profileName;
  }

  title: string = 'first angular project';

  paragraph: string = 'paragraph content';

  inputName: string | null = "Hamza";

  ngOnInit(): void {
    
  }
  
}
