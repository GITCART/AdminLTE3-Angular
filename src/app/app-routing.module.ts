import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { FichaComponent } from './views/ficha/ficha.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: FichaComponent
      },
      {
        path: 'perfiles',
        component: PerfilComponent
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
