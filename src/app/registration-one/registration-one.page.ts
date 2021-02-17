import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration-one',
  templateUrl: './registration-one.page.html',
  styleUrls: ['./registration-one.page.scss'],
})
export class RegistrationOnePage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  backToPage(){
    console.log('this working');
    this.router.navigateByUrl('/home');
  }
  goToFormPage(){
    console.log('this is working');
    this.router.navigateByUrl('/registration-form');
  }

}
