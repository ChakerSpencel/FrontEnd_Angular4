import { Component, OnInit } from '@angular/core';
import { SpanierService } from '../spanier.service';
import { CartIncService } from '../cart-inc.service';
import { AuthenService } from '../authen.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {


  constructor(private service :SpanierService, private service2 :CartIncService,private service3 : AuthenService) { }

  ngOnInit() {

 


  }

  remove(livre) : void {
   // this.service.Plivre.
    var index = this.service.Plivre.indexOf(livre);
    this.service.Plivre.splice(index, 1);
    this.service.subtotal = this.service.subtotal - livre.price ;
    this.service2.counter -- ;

  }

  total () : number {
    if (this.service.subtotal != 0)
    return (this.service.subtotal - 6.94)
    else
    return ( 0 )


  }

  checkAccount() : boolean{
    if (this.service3.userAccount == "Account")
    return true ;
    else return false ;

  }
}
