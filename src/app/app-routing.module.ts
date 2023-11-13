import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoffeesComponent } from './components/coffees/coffees.component';
import { SingleCoffeeComponent } from './components/single-coffee/single-coffee.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "Coffees",
    component: CoffeesComponent
  },
  {
    path: "Coffees/:id",
    component: SingleCoffeeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
