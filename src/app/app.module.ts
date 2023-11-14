import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoffeesComponent } from './components/coffees/coffees.component';
import { SingleCoffeeComponent } from './components/single-coffee/single-coffee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RandomCoffeeComponent } from './components/random-coffee/random-coffee.component';
import { HeaderComponent } from './components/header/header.component';
import { NewCoffeeComponent } from './components/new-coffee/new-coffee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SearchByNameComponent } from './components/search-by-name/search-by-name.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoffeesComponent,
    SingleCoffeeComponent,
    RandomCoffeeComponent,
    HeaderComponent,
    NewCoffeeComponent,
    SearchByNameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
