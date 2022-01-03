import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../users/users.service";
import {NotifictionService} from "../../notifiction.service";
import {MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {LivreLivreService} from "../livre-livre.service";

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  genre: any = [];
  form:any = FormGroup;
  // @ts-ignore
  id: number;
  user: any = [];

  constructor( private livreServie: LivreLivreService,private notif: NotifictionService,
               private dialoRef: MatDialogRef<AddLivreComponent>, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.intForm();
    this.getGenre()
  }




  intForm(){
    this.form = new FormGroup({
      titre: new FormControl('', Validators.required),
      auteur: new FormControl('', Validators.required),
      annee: new FormControl('', Validators.required),
      nbrLivre: new FormControl('', Validators.required),
      genre: new FormControl(null, []),
    });
  }

  onClear(){
    this.form.reset();
    this.notif.success(':: Submitted successfully')
  }

  onSubmit(){
    console.log(this.form.value)
    if (this.form.valid){
      this.livreServie.addLivre(this.form.value).subscribe(
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
  getGenre(){
    this.livreServie.getGenre().subscribe(
      data =>{
        console.log(data)
        this.genre = data
      }
    )
  }
}
