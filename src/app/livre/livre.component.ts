import { Component, OnInit } from '@angular/core';
//import { SlivreService } from '../slivre.service';
import { Ilivre } from '../Ilivre';
import { SlivreService } from '../slivre.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchService } from '../search.service';
import { SpanierService } from '../spanier.service';
import { CartIncService } from '../cart-inc.service';



@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class livreComponent implements OnInit {
  public Plivre: any;
  //Plivre: any;
  
 

  
private term : string ="spouna" ;
private search : string = "";
private idModel : number;
private titreModel:string;
private descModel:string;
private image :string;
private prixModel : number;
private reviews :any; 
private test : number ;
//private nav : NavbarComponent;


//public Plivre : Array<Ilivre> = new Array<Ilivre>();
private livres: Ilivre[];
//private Plivre = new Ilivre[];
//  private service : SlivreService
  constructor( private service : SlivreService , private service2 : SearchService , private service3 : SpanierService , private service4 : CartIncService) {
    
   }

  ngOnInit() {
    
    
    //this.nav = new NavbarComponent();
    //this.term = this.nav.term;
  
    this.service.getAllLivre().subscribe(data => this.livres = data );
   
    // this.service2.term = "ahahah" ;
    //console.log(this.term);
    //this.service.affLivre();
    
   //this.livres = this.livres.filter(data => data.nom == "harry")

  }


 addToCart(livre){
 
 this.service3.Plivre.push(livre);
 this.service4.counter ++ ;
 this.service3.subtotal = this.service3.subtotal + livre.price ;
 //estship : 
 //total : 
 } 



  affiche(livre){
    this.reviews = new Array(); 
    this.Plivre = livre ;
    this.idModel = livre.id;
    this.titreModel = livre.nom;
    this.descModel = livre.description;
    this.image= livre.imgUrl;
    this.prixModel=livre.price;
    //this.reviews=livre.reviews
    let num : number ;
    for(num=0;num<livre.reviews;num++) {
     //console.log("test");
     this.reviews.push(0);
   }
   this.test = livre.reviews;
   //console.log(this.test);

  }


  categorie(livre):boolean {
    //console.log(livre.categorie);
    if (this.service2.categorie == "All") return true 
    else if (livre.categorie == this.service2.categorie)
    return true ;
    else return false;
   
 
    } 

}
