import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {UsersService} from "../users/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialogConfig, MatDialog} from "@angular/material/dialog";
import {AddUsersComponent} from "../users/add-users/add-users.component";
import {EditComponent} from "../users/edit/edit.component";
import {Users} from "../users/users.component";
import {EmprunteService} from "./service/emprunte.service";
import {AddEmprunteComponent} from "./add-emprunte/add-emprunte.component";


export interface Emprunte{
  id: number;
  adherent: string
  livre: string;
  datePret: string;
  DateRetour: string;
  status: string;
}

@Component({
  selector: 'app-empruntes',
  templateUrl: './empruntes.component.html',
  styleUrls: ['./empruntes.component.css']
})
export class EmpruntesComponent implements OnInit {

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  // @ts-ignore
  id: number;
  form:any = FormGroup;
  user: any = [];
  date = "";



  // @ts-ignore
  listData: MatTableDataSource<any>;
  public displayedColumns: string[] = ['id','adherent', 'livre','datePret','DateRetour','status', 'rendre'];
  public dataSource = new MatTableDataSource<Emprunte>();


  // @ts-ignore
  // @ts-ignore
  constructor(private eMservice: EmprunteService, private route: Router, private MatDialog: MatDialog,
              private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAll()

  }

  getAll(){
    this.eMservice.getEmprunte().subscribe(
      res => {
        this.dataSource.data = res as Emprunte[]
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
    this.MatDialog.open(AddEmprunteComponent, dialogConfig);
  }

  // onDelete(id: number){
  //   let conf = confirm('Etes vous sur de vouloir supprimé ?')
  //   if(conf)
  //     this.service.deleteUser(id).subscribe(
  //       data => {
  //         console.log(data)
  //       }
  //     )
  //}




  onEdit(id: number){
    this.eMservice.rendre(id).subscribe(
      data =>{
        console.log(data)
      }
    )
  }
}
