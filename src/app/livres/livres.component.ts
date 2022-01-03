import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {Users} from "../users/users.component";
import {MatDialogConfig, MatDialog} from "@angular/material/dialog";
import {AddUsersComponent} from "../users/add-users/add-users.component";
import {EditComponent} from "../users/edit/edit.component";
import {ActivatedRoute, Router} from "@angular/router";
import {LivreLivreService} from "./livre-livre.service";
import {AddLivreComponent} from "./add-livre/add-livre.component";

export interface Livre{
  id: number;
  titre: string;
  auteur: string,
  annee: string;
  genre: any;
  nbrLivre: number;
}


@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  // @ts-ignore
  id: number;
  form:any = FormGroup;
  user: any = [];



  // @ts-ignore
  public displayedColumns: string[] = ['id','titre', 'auteur','genre','annee','nbrLivre', 'update','delete'];
  public dataSource = new MatTableDataSource<Livre>();
  constructor(private route: Router, private MatDialog: MatDialog,
              private router: ActivatedRoute, private servicesLiv: LivreLivreService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.servicesLiv.getLivres().subscribe(
      res => {
        this.dataSource.data = res as Livre[]
      })
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator;
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.MatDialog.open(AddLivreComponent, dialogConfig);
  }




  onEdit(row: any){
    this.user.id = row;
    const dialogConf = new MatDialogConfig<Users>();
    dialogConf.disableClose = true;
    dialogConf.autoFocus = true
    dialogConf.width = '40%';
    this.MatDialog.open(EditComponent,dialogConf)
  }

  onDelete(){

  }

}
