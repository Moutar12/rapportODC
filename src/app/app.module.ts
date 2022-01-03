import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginInterceptor} from "./login/intercept/login.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenuComponent} from "./menu/menu.component";
import {AngularMaterialModule} from "./angular-material.module";
import {UsersComponent} from "./users/users.component";
import {AddUsersComponent} from "./users/add-users/add-users.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {EditComponent} from "./users/edit/edit.component";
import {LivresComponent} from "./livres/livres.component";
import {EditLivreComponent} from "./livres/edit-livre/edit-livre.component";
import {AddLivreComponent} from "./livres/add-livre/add-livre.component";
import {EmpruntesComponent} from "./empruntes/empruntes.component";
import {AddEmprunteComponent} from "./empruntes/add-emprunte/add-emprunte.component";
import {EditEmprunteComponent} from "./empruntes/edit-emprunte/edit-emprunte.component";
import {CustomPipe} from "./custom.pipe";
import {SummerizePipe} from "./summerize.pipe";
import {JumpLinePipe} from "./jump-line.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    UsersComponent,
    AddUsersComponent,
    EditComponent,
    LivresComponent,
    EditLivreComponent,
    AddLivreComponent,
    EmpruntesComponent,
    AddEmprunteComponent,
    EditEmprunteComponent,
    CustomPipe,
    SummerizePipe,
    JumpLinePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,




  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
