import { Component } from '@angular/core';
import { Coffee } from 'src/app/models/coffee.model';
import { CoffeesService } from 'src/app/services/coffees.service';

@Component({
  selector: 'app-single-coffee',
  templateUrl: './single-coffee.component.html',
  styleUrls: ['./single-coffee.component.css'],
})
export class SingleCoffeeComponent {
  coffee: any;

  constructor(private coffeeService: CoffeesService) {

  }

  ngOnInit(): void {}

  goBack(): void {}
}
