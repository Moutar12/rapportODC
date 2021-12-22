import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MenuComponent} from "./menu/menu.component";
import {UsersComponent} from "./users/users.component";
import {EditComponent} from "./users/edit/edit.component";
import {LivresComponent} from "./livres/livres.component";
import {EmpruntesComponent} from "./empruntes/empruntes.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', component: UsersComponent, children: [
          {path: 'edit/:id', component: EditComponent}
        ]},

      {path: "livre", component: LivresComponent},
      {path: 'emprunte', component: EmpruntesComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
