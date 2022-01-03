import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../users.service";
import {MatDialogRef} from "@angular/material/dialog";
import {NotifictionService} from "../../notifiction.service";
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  profil: any = [];
  form:any = FormGroup;
  // @ts-ignore
  id: number;
  user: any = [];
  submitted = false;
  success = '';

  constructor( private uservice: UsersService,private notif: NotifictionService,
              private dialoRef: MatDialogRef<AddUsersComponent>, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
        prenom: new FormControl('', Validators.required),
        nom: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl(''),
        adresse: new FormControl('',Validators.required),
        profil: new FormControl(null, []),
      },
      // @ts-ignore

      this.ConfirmedValidator("password", 'confirmPassword')
    );    this.getProfill()
  }
  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({confirmedValidator: true});
      } else {
        matchingControl.setErrors(null);
      }
    }
  }


  get formControls (){return this.form.controls;}

  onClear(){
    this.form.reset();
    this.notif.success(':: Submitted successfully')
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value)
    if (this.form.valid){
        this.uservice.addUser(this.form.value).subscribe(
          date => {
            console.log(date)
            this.form.reset();
            this.notif.success(':: Submitted successfully');
            this.onClose()
          })
      }
  }



  onClose(){
    this.form.reset();
    this.dialoRef.close();
  }
  getProfill(){
    this.uservice.allProfil().subscribe(
      data =>{
        this.profil = data
      }
    )
  }

}
