import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { USERS } from '../initial-users';
import { User } from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent{
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  //passwordFormControl = new FormControl('', [Validators.required, Validators.email]);
  currentUser?: User;

  validPassword(password: string): boolean{
    if(password!=''){
      let regexes =[
        {errorMsg: 'Password must have atleast 6 characters', regex: /\S{6,}/},
        {errorMsg: 'Password must have atleast 1 alphabet', regex: /\w+/},
        {errorMsg: 'Password must have atleast 1 number', regex: /\S{8}/},
        {errorMsg: 'Password must have atleast 1 special symbol from @, _, #, $, %, ^, &', regex: /[@,#,$,%,_,^,&]+/},
        // {errorMsg: 'Password must not have whitespace characters', regex: /\S{password.length}/},
      ]
      for(let i=0;i<regexes.length;i++){
        if(!regexes[i].regex.test(password)){
          //alert(regexes[i].errorMsg);
          return false;
        }
      }
      return true;
    }
    return false;
  }

  signIn(emailID:string, password: string){
    let alerted=false;
    for(let person of USERS){
      if(emailID===person['emailid']){
        if(password===person['password']){
          alert(`Yup, you's a user. Welcome back ${person['name']}!!`);
          this.currentUser = person;
          this.router.navigate(["home"], { state: {data: this.currentUser} });
        }
        else alert("Right email, wrong password");
        alerted = true; 
      }
    }
    if(!alerted) alert("Wrong email, wrong password");
  }

  hide = true;

  constructor(private router: Router) { }

}
