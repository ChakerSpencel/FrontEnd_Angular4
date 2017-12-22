import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { livreComponent } from './livre/livre.component';
//import { Livre2Component } from './livre2/livre2.component';
//import { Livre3Component } from './livre3/livre3.component';
//import { Livre4Component } from './livre4/livre4.component';
//import { Livre5Component } from './livre5/livre5.component';
//import { Livre6Component } from './livre6/livre6.component';
import { ProdViewComponent } from './prod-view/prod-view.component';
import {RouterModule} from '@angular/router';
import { SlivreService } from './slivre.service';
import { HttpModule } from '@angular/http';
import { FilterPipe } from './livre/filter.pipe';
import { FormsModule} from '@angular/forms';
import { SearchService } from './search.service';
import { PanierComponent } from './panier/panier.component';
import { SpanierService } from './spanier.service';
import { CartIncService } from './cart-inc.service';
import { AuthenComponent } from './authen/authen.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthenService } from './authen.service';
import { authSuccesModalComponent } from './authSuccesModal/authSuccesModal.component';
import { AuthFailedComponent } from './auth-failed/auth-failed.component';
import { PaymentComponent } from './payment/payment.component';
import { GalleryComponent } from './gallery/gallery.component';
//import { AllenComponent } from './allen/allen.component';
//import { CategoriePipe } from './livre/categorie.pipe';
//import { CategoriePipe } from './categorie.pipe';



@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    livreComponent,
   //Livre2Component,
    //Livre3Component,
    //Livre4Component,
    //Livre5Component,
    // Livre6Component,
    ProdViewComponent,
   FilterPipe,
   PanierComponent,
   AuthenComponent,
   CarouselComponent,
   AboutUsComponent,
   authSuccesModalComponent,
   AuthFailedComponent,
   PaymentComponent,
   GalleryComponent,
  // AllenComponent,
   //CategoriePipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
       {path : 'Home' , component: livreComponent},
       { path : 'panier' , component : PanierComponent },
       {path : "", redirectTo: "Home", pathMatch:"full"},
       {path : 'authentification' , component : AuthenComponent},
       {path : 'about_us' , component : AboutUsComponent },
       {path :'checkout' , component : authSuccesModalComponent},
       {path : 'payment' , component : PaymentComponent},
       {path : 'gallery' , component : GalleryComponent}

    ])

  ],
  providers: [
    SlivreService,
    SearchService,
    SpanierService,
    CartIncService,
    AuthenService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
