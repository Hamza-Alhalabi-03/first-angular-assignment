import { Component } from '@angular/core';
import { ReversePipe } from './reverse.pipe';
import { FormsModule } from '@angular/forms';
// import { LowerCasePipe } from '@angular/common';
// import { DatePipe } from '@angular/common';
// import { CurrencyPipe } from '@angular/common';
import { HighlightPipe } from './highlight.pipe';


@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [ReversePipe, FormsModule, HighlightPipe],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  profileNameChild: string = "Ahmad Azmi"
  profileImageSrc: string = './././assets/images/profile-image.png';
  inputToRevese: string = 'abc';
  dangerButton: string = 'btn btn-danger';
  changeColor() {
    console.log('Button color changed');
    this.dangerButton = 'btn btn-warning';
  }
  returnColor() {
    console.log('Button color returned');
    this.dangerButton = 'btn btn-danger';
  }
  today = new Date();
  num = 150020;

  filterText:string = 'Angular';
  paragraphToSearch: string = 'Angular is a powerful front-end framework for building dynamic, single-page web applications. Developed and maintained by Google, it allows developers to create highly interactive user interfaces with reusable components. Angular\'s robust features include two-way data binding, dependency injection, and an extensive CLI for efficient development. Its modular structure and integration with tools like Bootstrap and Font Awesome make it an ideal choice for creating responsive and scalable web applications.';
}

