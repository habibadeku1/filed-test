import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private snackBar: MatSnackBar) { }

  showSnack(message: string, action:string, type:string) {
    type==='error'?this.snackBar.open(message, action, {duration: 6000, panelClass: 'snack-error'}):
    this.snackBar.open(message, action, {duration: 6000});
  }
}
