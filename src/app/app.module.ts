import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { Pregunta1Component } from './pregunta1/pregunta1.component';
import { Pregunta2Component } from './pregunta2/pregunta2.component';
import { Pregunta3Component } from './pregunta3/pregunta3.component';

const routes: Routes = [
  { path: 'pregunta1', component: Pregunta1Component },
  { path: 'pregunta2', component: Pregunta2Component },
  { path: 'pregunta3', component: Pregunta3Component },
  // Agrega más rutas según tus necesidades
];

@NgModule({
  declarations: [
    AppComponent,
    
    Pregunta1Component,
    Pregunta2Component,
    Pregunta3Component
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
