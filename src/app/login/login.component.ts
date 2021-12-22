import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  isSubmitted = false;
  // @ts-ignore
  form: FormGroup = FormGroup;
  // @ts-ignore
  email: string;
  // @ts-ignore
  password: string;

  constructor(private formBuilder: FormBuilder, private auth: LoginService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  f() {
    return this.form.controls
  }

  get formControls (){return this.form.controls;}

  onSubmit() {

    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log("ok");
    this.auth.login(this.form.value.email, this.form.value.password).subscribe(
      data => {
        console.log(data)
      },error => {
        console.log(error)
      }
    )
  }

}
