import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createPasswordStrengthValidator } from './custom-validate.validate';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  imports: [FormsModule, ReactiveFormsModule],
  providers:[ Validators ]
})
export class ReactiveFormComponent implements OnInit {
  form:FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });


  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', createPasswordStrengthValidator()],
    });
  }
   
  onSubmit() {
  }
}
