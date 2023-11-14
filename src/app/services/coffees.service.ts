import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from '../models/coffee.model';

@Injectable({
  providedIn: 'root',
})
export class CoffeesService {
  private readonly API_URL =
    'https://ih-coffees-api-42e1df06199a.herokuapp.com/coffees';

  constructor(private http: HttpClient) {}

  getAllCoffees(): Observable<any> {
    return this.http.get<Coffee[]>(this.API_URL);
  }
  getCoffeeById(id: string): Observable<Coffee> {
    return this.http.get<any>(this.API_URL + '/' + id);
  }
  getRandomCoffee(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/random');
  }
  createCoffee(body: any): Observable<any> {
    return this.http.post<any>(this.API_URL +'/new', body);
  }

  searchCoffee(queryName: string): Observable<any> {
    console.log(this.API_URL +'/search?q=' + queryName)
    return this.http.get<any>(this.API_URL +'/search?q=' + queryName);
  }
}
