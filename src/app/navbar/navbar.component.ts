import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { CartIncService } from '../cart-inc.service';
import { AuthenService } from '../authen.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  

 

  
  
 

  //ter : string = "aaaa";

  constructor(private service2 : SearchService , private service3 : CartIncService , private service4 : AuthenService ) {
  //  this.ninja.term = "aaa" ;
  
 
   }

  ngOnInit() {
    
    
  }

  categorieFilter ( val : string) {
  switch(val) { 
    case "Fantasy": { 
      this.service2.categorie="Fantasy";
       break; 
    } 
    case "Classics": { 
      this.service2.categorie="Classics";
       break; 
    } 
    case "Comedy": {
      this.service2.categorie="Comedy"
       break;    
    } 
    case "Young": { 
      this.service2.categorie="Young"
       break; 
    }  
    case "All": { 
      this.service2.categorie="All";
      break; 
   }  
 }
}

  
 

}
