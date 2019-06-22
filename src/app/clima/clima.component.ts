import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-clima',
  templateUrl: '/clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  private articulos = null;
  constructor(private http: HttpClient) { }

  ngOnInit() { }

  handleSubmit(cityValue) {
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue.value}&APPID=bf8fe02fb5288ea367500fa2eab2fd09`)
      .subscribe(
        result => {
          this.articulos = result;
        },
        error => {
          console.log('problemas');
        }
      );
  }
}
