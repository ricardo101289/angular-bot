import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service"

@Component({
  selector: 'app-view-api',
  templateUrl: './view-api.component.html',
  styleUrls: ['./view-api.component.sass']
})
export class ViewApiComponent implements OnInit {
  palabra: String="";
  constructor(public api : ApiService) { }

  ngOnInit() {
    this.api.getFrase().subscribe(frase =>{
      this.palabra = frase;
    })
  }

}
