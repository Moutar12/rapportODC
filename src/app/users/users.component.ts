import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {MatDialog,MatDialogConfig} from "@angular/material/dialog";
import {UsersService} from "./users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AddUsersComponent} from "./add-users/add-users.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {EditComponent} from "./edit/edit.component";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";



export interface Users{
  id:number;
  prenom: string;
  nom: string;
  adresse: string;
  email:string;
  profil:string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  // @ts-ignore
  id: number;
  form:any = FormGroup;
  user: any = [];
  prenom = '';
  nom = "";
  email = "";
  adresse = "";
  password = "";
  profil = "";



  // @ts-ignore
  listData: MatTableDataSource<any>;
  public displayedColumns: string[] = ['id','prenom', 'nom','profil','address', 'email', 'actions'];
  public dataSource = new MatTableDataSource<Users>();


  // @ts-ignore
  // @ts-ignore
  constructor(private service: UsersService, private route: Router, private MatDialog: MatDialog,
              private router: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.getAll()

  }

getAll(){
      this.service.allUsers().subscribe(
        res => {
          this.dataSource.data = res as Users[]
        })
}



  public redirectToUpdate = (id: string) => {

  }
  public redirectToDelete = (id: string) => {

  }

  // doFilter(filterValue: string){
  //   filterValue = filterValue.trim();
  //   filterValue = filterValue.toLocaleLowerCase();
  //   this.dataSource.filter = filterValue
  // }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator;
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.MatDialog.open(AddUsersComponent, dialogConfig);
  }

  onDelete(id: number){
    let conf = confirm('Etes vous sur de vouloir supprimé ?')
    if(conf)
    this.service.deleteUser(id).subscribe(
      data => {
        console.log(data)
      }
    )
  }


  onEdit(id: number){
    this.service.oneUser(id).subscribe(
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
    const dialogConf = new MatDialogConfig<Users>();
    dialogConf.disableClose = true;
    dialogConf.autoFocus = true
    dialogConf.width = '40%';
    this.MatDialog.open(EditComponent,dialogConf)
  }




}
