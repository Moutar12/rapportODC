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

  constructor( private uservice: UsersService,private notif: NotifictionService,
              private dialoRef: MatDialogRef<AddUsersComponent>, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.intForm();
    this.getProfill()
  }




  intForm(){
    this.form = new FormGroup({
      prenom: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      adresse: new FormControl(''),
      profil: new FormControl(null, []),
    });
  }

  onClear(){
    this.form.reset();
    this.notif.success(':: Submitted successfully')
  }

  onSubmit(){
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
