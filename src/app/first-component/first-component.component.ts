import { Component } from '@angular/core';
import { ReversePipe } from './reverse.pipe';
import { FormsModule } from '@angular/forms';
// import { LowerCasePipe } from '@angular/common';
// import { DatePipe } from '@angular/common';
// import { CurrencyPipe } from '@angular/common';
import { HighlightPipe } from './highlight.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


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
  paragraphToSearch: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.paragraphToSearch = this.sanitizer.bypassSecurityTrustHtml(
      ` ...Angular is a powerful front-end framework for building dynamic, single-page web applications. Developed and maintained by Google, it allows developers to create highly interactive user interfaces with reusable components. Angular\'s robust features include two-way data binding, dependency injection, and an extensive CLI for efficient development. Its modular structure and integration with tools like Bootstrap and Font Awesome make it an ideal choice for creating responsive and scalable web applications`
    );
  }
  filterText:string = '';
  // paragraphToSearch: SafeHtml = '<span class="highlighter"> tteesstt </span> ...Angular is a powerful front-end framework for building dynamic, single-page web applications. Developed and maintained by Google, it allows developers to create highly interactive user interfaces with reusable components. Angular\'s robust features include two-way data binding, dependency injection, and an extensive CLI for efficient development. Its modular structure and integration with tools like Bootstrap and Font Awesome make it an ideal choice for creating responsive and scalable web applications';
}

