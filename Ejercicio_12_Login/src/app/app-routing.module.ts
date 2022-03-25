import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path : '',
    component: LoginComponent
  },
  {
    path: 'bienvenida/:usuario/:pass',
    component: BienvenidaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }