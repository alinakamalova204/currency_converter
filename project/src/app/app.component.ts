import {Component, ElementRef, ViewChild} from '@angular/core';
import {CurrencyapidataService} from "./currencyapidata.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'currencycalculator';
  currjson: any = [];

  base = 'USD';
  cont2 = 'RUB';
  result: number = 1;
  inputNumber: number = 1;
  final: string = '';

  @ViewChild('c1') country1: ElementRef | undefined;
  @ViewChild('c2') country2: ElementRef | undefined;
  changebase(a: string) {
    this.base = a;
  }

  tocountry(b: string) {
    this.cont2 = b;
  }

  constructor(private currency: CurrencyapidataService) {
  }

  convert() {
    this.currency.getcurrencydata(this.base).subscribe(data => {
      this.currjson = data;

      if (this.cont2 === 'USD') {
        this.result = this.currjson.conversion_rates.USD;
      }
      if (this.cont2 === 'RUB') {
        this.result = this.currjson.conversion_rates.RUB;
      }
      if (this.cont2 === 'EUR') {
        this.result = this.currjson.conversion_rates.EUR;
      }
      if (this.cont2 === 'AUD') {
        this.result = this.currjson.conversion_rates.AUD;
      }
      if (this.cont2 === 'CNY') {
        this.result = this.currjson.conversion_rates.CNY;
      }
      if (this.cont2 === 'MVR') {
        this.result = this.currjson.conversion_rates.MVR;
      }
      if (this.cont2 === 'THB') {
        this.result = this.currjson.conversion_rates.THB;
      }
      if (this.cont2 === 'TRY') {
        this.result = this.currjson.conversion_rates.TRY;
      }
      this.result = this.inputNumber * this.result;
      this.final = this.result + this.cont2

    });

  }

}
