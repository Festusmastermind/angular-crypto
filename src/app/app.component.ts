import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crypto';

  objectKeys = Object.keys;
  cryptos: any;   //any means it can be of any dataType...

  constructor(private _data: DataService) {}
  
  //ngOnInit means that when this component is loaded then run execute this function always..
  ngOnInit() {
    this._data.getPrices()
      .subscribe(res => {
        this.cryptos = res;
        console.log(res);
      });
  }


}
