import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';  //when you import and its not used it can also caused errors..

@Injectable({
  providedIn: 'root'
})
export class DataService {

  result:any;

  constructor(private _http: HttpClient) {}

  getPrices() {
    return this._http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD")
     // .map(result => this.result = result);
  }
}

//this is the api endpoint that will delivered all prices for respective coins specified.
//"https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD"
