import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CurrencyapidataService {

  constructor(private http:HttpClient) {}
  getcurrencydata(country1: string) {
    let url = 'https://v6.exchangerate-api.com/v6/d4c13c67ced705d3983b3884/latest/' + country1
    return this.http.get(url)
  }
}

