import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.page.html',
  styleUrls: ['./registration-form.page.scss'],
})
export class RegistrationFormPage implements OnInit {

  registrationForm = this.formBuilder.group({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  backToPageOne(){
    this.router.navigateByUrl('/registration-one');
  }
  selectImage(){
    console.log('this work');
  }
  onRegister(){
    console.log(this.registrationForm.value);
  }
}
