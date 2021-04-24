import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserModel } from '../models/user.model'

export interface IResponse {
  status: string,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "http://localhost:3000/users/";
  constructor(private http: HttpClient) { }

  addUserDetails(data: UserModel): Observable<HttpResponse<any>> {
    const stubResponse: IResponse = {
      status: 'success',
      message: 'User details successfully saved!',
    };
    return of(new HttpResponse({ status: 200, body: stubResponse }));
  }
}
