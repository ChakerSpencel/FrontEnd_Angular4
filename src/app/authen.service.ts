import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';
import { User } from './user';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthenService {
  public userAccount : String ="Account" ; 
  url:string='http://localhost:53220/api/Users';
  constructor(private http : Http) { }

getUser():Observable <User[]>{
  return this.http.get(this.url).map((res : Response) => <User[]>res.json());
}

}
