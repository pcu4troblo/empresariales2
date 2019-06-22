import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClimaComponent } from './clima/clima.component';
import {HttpClientModule} from '@angular/common/http';
import { BuscadorComponent } from './buscador/buscador.component';
@NgModule({
  declarations: [
    AppComponent,
    ClimaComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
