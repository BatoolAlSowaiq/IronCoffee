import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coffee } from 'src/app/models/coffee.model';
import { CoffeesService } from 'src/app/services/coffees.service';

@Component({
  selector: 'app-single-coffee',
  templateUrl: './single-coffee.component.html',
  styleUrls: ['./single-coffee.component.css'],
})
export class SingleCoffeeComponent implements OnInit {
  coffee: any = [];
  id: any = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private coffeeService: CoffeesService
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute);

    this.id = this.activatedRoute.snapshot.params['id'];
    this.coffeeService.getCoffeeById(this.id).subscribe({
      next: (data) => {
        this.coffee = data;
      },
      error: (e) => {
        console.log(e);
        alert(`Error: ${e}`);
      },
    });
  }
}
