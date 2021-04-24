import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userDetailForm: FormGroup;
  formErrorMessage: string = 'All fields are required';  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildUserDetailForm();
  }

  buildUserDetailForm() {
    this.userDetailForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[A-Za-z][A-Za-z -]*$')]], 
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
      email: ['', [Validators.required, Validators.minLength(4), Validators.email] ],
      monthAdvertBudget: [0, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      phone: ['', [Validators.required,Validators.minLength(6), Validators.maxLength(12), Validators.pattern('[0-9]+')]]
    });
  }

  addUserDetail() {
    if (this.userDetailForm.status!='VALID') {
      this.formErrorMessage = 'Please try again, form is invalid'
      return;
    } else if (this.userDetailForm.status === 'VALID') {
      const userDetailObject: UserModel =  {
        firstName: this.userDetailForm.get('firstName').value,
        lastName: this.userDetailForm.get('lastName').value,
        email: this.userDetailForm.get('email').value,
        monthAdvertBudget: this.userDetailForm.get('monthAdvertBudget').value,
        phone: this.userDetailForm.get('phone').value.toString(),
      }
    }
  }

  resetForm() {
    this.userDetailForm.reset();
  }

}
