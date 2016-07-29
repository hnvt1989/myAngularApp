import { Component } from '@angular/core';
import { SignupFormComponent } from './signup-form.component';
@Component({
  selector: 'my-app',
  template: '<signup-form></signup-form>',
  directives: [SignupFormComponent]
})
export class AppComponent { }