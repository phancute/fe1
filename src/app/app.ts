import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
=======
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
>>>>>>> 3adbbfd0687d3c878eb2ae0f2b90b0887776c756
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
<<<<<<< HEAD
  id = 123;
  title = 'Hello from App Component'; // property -> {{ title }}
=======
  title = 'Hello from App Component';
>>>>>>> 3adbbfd0687d3c878eb2ae0f2b90b0887776c756
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