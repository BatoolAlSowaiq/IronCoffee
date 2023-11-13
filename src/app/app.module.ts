import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoffeesComponent } from './components/coffees/coffees.component';
import { SingleCoffeeComponent } from './components/single-coffee/single-coffee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RandomCoffeeComponent } from './components/random-coffee/random-coffee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoffeesComponent,
    SingleCoffeeComponent,
    RandomCoffeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
