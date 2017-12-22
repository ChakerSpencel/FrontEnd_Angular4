import { Injectable } from '@angular/core';
//import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Ilivre } from './ilivre';
//import { Response } from '@angular/http/src/static_response';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class SlivreService {

  url2:string='http://localhost:53220/api/Livre';
  url:string='/assets/L.json';
  constructor(private http : Http) { }

getAllLivre():Observable <Ilivre[]>{
  return this.http.get(this.url2).map((res : Response) => res.json());
}

//affLivre(){
//return this.http.get(this.url).map((response)=>response.json()).subscribe((data)=>console.log(data))


//}


}
