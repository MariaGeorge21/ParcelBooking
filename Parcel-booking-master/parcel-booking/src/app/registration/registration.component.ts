import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import { Customer } from '../model/customer';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signupForm: FormGroup;
  usernameExists: boolean;
  customername:string;
  email:string;
  password:string;

  constructor(private formBuilder: FormBuilder,private signupservice:SignupService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      customername: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required]
    });
  }

  registerUser() {
    // if (this.signupForm.valid) {
    
    //   console.log('User registered:', this.signupForm.value);
    // } else {
    
    //   console.log('Form is invalid');
    // }
    
      if (this.signupForm.valid) {
        const formData = this.signupForm.value;
        const customer: Customer = {
          customername: formData.customername,
          email: formData.email,
          password: formData.password
        };
    
        this.signupservice.add(customer)
          .subscribe(
            response => {
              console.log('User registered:', response);
              // Optionally, you can perform any additional actions after successful registration.
            },
            error => {
              console.error('Failed to register user:', error);
              // Handle the error appropriately, such as displaying an error message.
            }
          );
      } else {
        // Handle form validation errors
        console.log('Form is invalid');
      
    }
    
  }
  checkUsername() {

    this.signupservice.checkUsernameExists(this. customername)

      .subscribe(usernameExists => this.usernameExists = usernameExists);

  }
}
