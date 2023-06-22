import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  login() {
    // Here, you can implement the logic for user authentication.
    // You can use the form data stored in the component properties (email, password) to authenticate the user.
    // This could involve making an HTTP request to a backend API or using a authentication service.
    // You can also add additional validation and error handling as needed.
    console.log('User login submitted');
  }
}
