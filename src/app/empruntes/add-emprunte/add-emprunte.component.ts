import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LivreLivreService} from "../../livres/livre-livre.service";
import {NotifictionService} from "../../notifiction.service";
import {MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {EmprunteService} from "../service/emprunte.service";

@Component({
  selector: 'app-add-emprunte',
  templateUrl: './add-emprunte.component.html',
  styleUrls: ['./add-emprunte.component.css']
})
export class AddEmprunteComponent implements OnInit {

  livre: any = [];
  form:any = FormGroup;
  // @ts-ignore
  id: number;
  user: any = [];
  adherent: any = [];

  constructor( private livreServie: LivreLivreService,private notif: NotifictionService,
               private dialoRef: MatDialogRef<AddEmprunteComponent>, private route: ActivatedRoute,
               private empruntService: EmprunteService
  ) { }

  ngOnInit(): void {
    this.intForm();
    this.getLivres()
    this.getAdhrerent()
  }




  intForm(){
    this.form = new FormGroup({
      datePret: new FormControl('', Validators.required),
      livre: new FormControl(null, []),
      adherent: new FormControl(null, []),
    });
  }

  onClear(){
    this.form.reset();
    this.notif.success(':: Submitted successfully')
  }

  onSubmit(){
    console.log(this.form.value)
    if (this.form.valid){
      this.empruntService.addEmprunte(this.form.value).subscribe(
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
  getLivres(){
    this.livreServie.getLivres().subscribe(
      data =>{
        console.log(data)
        this.livre = data
      }
    )
  }

  getAdhrerent(){
    this.empruntService.getAdherent().subscribe(
      data =>{
        console.log(data)
        this.adherent = data
      }
    )
  }

}
