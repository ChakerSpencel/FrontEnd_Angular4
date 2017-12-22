import { Injectable } from '@angular/core';
import { Ilivre } from './Ilivre';

@Injectable()
export class SpanierService {

 public Plivre : Array<Ilivre> = new Array<Ilivre>();
 public subtotal : number = 0 ;
 public estship : number = 0;
 public total : number = 0;
  constructor() { 



  }

}
