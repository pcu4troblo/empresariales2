import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  private resultado=null;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  handleSubmit1() {
    this.http.get('https://www.googleapis.com/customsearch/v1?q=colombia&cx=012922988543223717559%3A2fblf2wtphi&key=AIzaSyA-gpl3LrP-_p7LGsJk51TGUWds6O15N7A')
        .subscribe(
          result=>{
            this.resultado=result;
          },
          error=>{
            console.log("Problemas");
          }
        );
  }
}
