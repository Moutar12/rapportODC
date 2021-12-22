import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotifictionService {

  constructor(private snakBar: MatSnackBar) { }

  config : MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  }

  success(msg: string){
    this.config['panelClass'] = ['notification', 'success'];
    this.snakBar.open(msg, '', this.config);
  }

  warn(msg: string){
    this.config['panelClass'] = ['notification', 'warn'];
    this.snakBar.open(msg, '', this.config)
  }
}
