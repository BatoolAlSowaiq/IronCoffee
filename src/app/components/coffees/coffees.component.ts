import { Component } from '@angular/core';
import { CoffeesService } from 'src/app/services/coffees.service';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css'],
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
      },
    });
  }

  searchText(text: string) {
    this.coffeesService.searchCoffee(text).subscribe(
      (data) => {
        this.coffees = data;
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }
}
