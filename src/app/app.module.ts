import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { FooterComponent } from './pages/main/footer/footer.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { MenuSidebarComponent } from './pages/main/menu-sidebar/menu-sidebar.component';
import { FichaComponent } from './views/ficha/ficha.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    MenuSidebarComponent,
    FichaComponent,
    PerfilComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
