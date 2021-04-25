import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserModel } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  data$: Observable<UserModel>;

  constructor(private snackBar: MatSnackBar, private store: Store) {
  }

  showSnack(message: string, action:string, type:string) {
    type==='error'?this.snackBar.open(message, action, {duration: 6000, panelClass: 'snack-error'}):
    this.snackBar.open(message, action, {duration: 6000});
  }
}
