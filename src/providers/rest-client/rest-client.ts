import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the RestClientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestClientProvider {
  basePath:string  = "https://reqres.in";
  usersPath : string = this.basePath+ "/api/users";
  constructor(public http: HttpClient) {
    console.log('Hello RestClientProvider Provider');
  }

  public getUsers (): Observable<any>{
    return this.http.get( this.usersPath + "?page=2" );
     
  }

  public postUser(body: any): Observable<any>{
    return this.http.post(this.usersPath, body);
  }

}
