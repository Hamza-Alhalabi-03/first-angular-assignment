import { Component, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../shared/models/wishItem';
import { FirstComponentComponent } from './first-component/first-component.component'; 
// Import your standalone component



@Component({
  selector: 'app-root', // The custom HTML tag for this component
  standalone: true, // Allows the component to be standalone without a module
  imports: [RouterOutlet, FormsModule, FirstComponentComponent], // Imports other Angular features like RouterOutlet
  templateUrl: './app.component.html', // Link to the component's template
  styleUrl: './app.component.css' // Link to the component's style
})

export class AppComponent {
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


  items = [
    new WishItem('learn Angular'),
    new WishItem('Drink Water', true),
    new WishItem('Find a good place')
  ];
  title: string = 'first angular project';
  paragraph: string = 'paragraph content';
  inputName: string | null = "Hamza";
}
