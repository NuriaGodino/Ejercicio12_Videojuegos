import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

@NgModule({
  declarations: [					
    AppComponent,
      CabeceraComponent,
      NavegacionComponent,
      LoginComponent,
      BienvenidaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
