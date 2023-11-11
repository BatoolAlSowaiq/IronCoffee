import { Component } from '@angular/core';
import { Coffee } from 'src/app/models/coffee.model';
import { CoffeesService } from 'src/app/services/coffees.service';

@Component({
  selector: 'app-single-coffee',
  templateUrl: './single-coffee.component.html',
  styleUrls: ['./single-coffee.component.css'],
})
export class SingleCoffeeComponent {
  coffee: Coffee;

  constructor(private coffeeService: CoffeesService) {
    this.coffee = new Coffee(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
      '_id',
      'Black',
      'Pure, undiluted essence of coffee',
      'Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.',
      'Unknown',
      'Enjoy as it is without any additives to experience the full essence.',
      'Traditional'
    );
  }

  ngOnInit(): void {}

  goBack(): void {}
}
