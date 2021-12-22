import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {NotifictionService} from "../../notifiction.service";
import {MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Data} from "@angular/router";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  profil: any = [];
  form:any = FormGroup;
  // @ts-ignore
  id: number;
  user: any = [];
  prenom = '';
  nom = "";
  email = "";
  adresse = "";
  password = "";


  constructor( private uservice: UsersService,private notif: NotifictionService,
                private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.intForm();
    this.id = this.route.snapshot.params.id
    this.uservice.oneUser(this.id).subscribe(
      (data) => {
        this.id = data.id
        this.prenom = data.prenom;
        this.nom = data.nom;
        this.adresse = data.adresse;
        this.profil = data.profil;
        this.email = data.email;
        this.password = data.password
        console.log(data)
      })
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




  onSubmit(id: number){
    id = this.route.snapshot.params.id
    console.log(id)
    // const user = {
    //   'prenom': validEdit.value.prenom,
    //   nom: validEdit.value.nom,
    //   email: validEdit.value.email,
    //   password: validEdit.value.prenom,
    //   adresse: validEdit.value.adresse,
    //   profil: validEdit.value.profil
    // }


      console.log(this.form.value)
      // @ts-ignore
    this.uservice.updateUser(this.form.value, id).subscribe(
          data => {
            console.log(data);
            this.form.reset();
            this.notif.success(':: Modif réussi')
          })


  }



  // onClose(){
  //   this.form.reset();
  //   this.dialog.close();
  //
  // }
  getProfill(){
    this.uservice.allProfil().subscribe(
      data =>{
        this.profil = data
      }
    )
  }


}
