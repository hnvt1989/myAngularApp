import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { SignupModel }    from './signupModel';
@Component({
  selector: 'signup-form',
  templateUrl: 'app/signup-form.component.html'
})
export class SignupFormComponent {
  countries = ['United States', 'Canada', 'England'];
  model = new SignupModel('John', 'Smith', 'johnsmith@test.com', 'United States');
  submitted = false;
  onSubmit() { this.submitted = true; }
}