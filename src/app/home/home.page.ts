import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  checkoutForm = this.formBuilder.group({
    name: '',
    password: ''
  });
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  onSubmit(){
    console.log(this.checkoutForm.value);
    this.router.navigateByUrl('/registration-one');
  }

}
