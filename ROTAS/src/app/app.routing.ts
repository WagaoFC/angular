import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { LoginComponent } from "./login/login.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";

const APP_ROUTES: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: '', component: HomeComponent }
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES)
