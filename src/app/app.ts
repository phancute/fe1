import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Hello from App Component';
  name = 'Angular';
  age = 30;

  // Event Binding
  sayHello() {
    alert('Hello from App Component');
    console.log('Hello from App Component');
  }

  delete() {
    console.log('Delete button clicked');
  }
}