import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CoffeesService } from 'src/app/services/coffees.service';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent {
  

  coffees: any[];

  constructor(private coffeesService: CoffeesService) {
    this.coffees = [];
   }

  ngOnInit() {
    this.coffeesService.getAllCoffees().subscribe({
      next: (data) => {
        this.coffees = data;
      },
      error: (e) => {
        alert(`Error: ${e}`);
      }
    });

  }

}
