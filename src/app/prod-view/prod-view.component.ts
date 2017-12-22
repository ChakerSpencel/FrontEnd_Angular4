import { Component, OnInit } from '@angular/core';
import { livreComponent } from '../livre/livre.component';

@Component({
  selector: 'app-prod-view',
  templateUrl: './prod-view.component.html',
  styleUrls: ['./prod-view.component.css']
})
export class ProdViewComponent implements OnInit {
  livre : livreComponent ;
  constructor() { }

  ngOnInit() {
  }

}
