import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { UserModel } from '../models/user.model';
import { getUserDetail } from '../store/selectors/user.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData: UserModel = null;
  dataSubscription$: Subscription;

  constructor(private router: Router, private store: Store) { }

  ngOnInit(): void {
    this.dataSubscription$ =  this.store.select(getUserDetail).subscribe((user: UserModel[])=> {
      this.userData = user[0];
    })
  }

  goToPage(page: string) {
    const pageUrl = '/'+page;
    this.router.navigate([pageUrl]);
  }

  ngOnDestroy() {
    this.dataSubscription$?this.dataSubscription$.unsubscribe():null;    
  }

}
