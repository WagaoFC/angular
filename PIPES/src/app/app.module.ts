import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExamplePipesComponent } from './example-pipes/example-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamplePipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
