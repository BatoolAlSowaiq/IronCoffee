import { Component, EventEmitter, Output } from '@angular/core';
import { CoffeesService } from 'src/app/services/coffees.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css'],
})
export class SearchByNameComponent {
  @Output()
  searchTextEvent: EventEmitter<string>;

  queryName: string;
  coffees: any[];

  constructor(private coffeesService: CoffeesService) {
    this.queryName = '';
    this.coffees = [];
    this.searchTextEvent = new EventEmitter<string>();
  }

  search() {
    this.searchTextEvent.emit(this.queryName);
  }
}
