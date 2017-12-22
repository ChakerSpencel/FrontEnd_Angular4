import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../authen.service';
import { User } from '../user';
import { Router } from '@angular/router';
//import { authSuccesModalComponent } from '../authSuccesModal/authSuccesModal.component';


@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.css']
})
export class AuthenComponent implements OnInit {
 // private users: User[];
  //private userAcount : String ;
  private users : Array<User> = new Array<User>();

  constructor(private service : AuthenService , private router : Router ) { 

    this.service.getUser().subscribe(data => this.users = data );

  }

  ngOnInit() {
   
  }

  loginUser(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

   if(this.matchAccount(username , password)) {
     // this.router.navigate(['checkout']);
     document.getElementById("openModalButton1").click();

  }
   else  document.getElementById("openModalButton2").click();

  
   
    

  }


  matchAccount(username , password) : boolean{
   
    let b : boolean =false;
   
    for (let user of this.users) {
      //console.log(user); // 1, "string", false
      //console.log(user);
     
      if(username == user.login && password == user.password )
      {
         // this.router.navigate(['checkout'])
         b = true;
         this.service.userAccount = user.login.toUpperCase( ) ;
         
         
        
      }
     }

    return b;
    
  }
}
