import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public password;
  public username;
  public correctPassword="qwer";

  constructor() { }

  ngOnInit(): void {
  }

  public loginFunction(username, password){
  if(password!=this.correctPassword){
    alert("The password is incorrect");
  }else{
    alert("Ur password is correct")
  }
  }

}
