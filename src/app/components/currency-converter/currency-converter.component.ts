import { Component, OnInit } from '@angular/core';
import { RestClientService } from 'src/app/shared/services/rest-client.service';
import { Observable } from 'rxjs';
import { CurrencyResponse } from 'src/app/shared/models/current.models';
import { CurrencySocketService } from 'src/app/shared/services/currency.socket.service';
import { FormGroup, FormControl } from '@angular/forms';
import { map, take } from 'rxjs/operators'

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  convertedValue: Observable<CurrencyResponse>;
  constructor(private restClientService: RestClientService,
    private currencySocketService: CurrencySocketService) {
     
     }

  ngOnInit() {
  }

  checkSocket(inputValue) {
    this.currencySocketService.getCurrencyResponse(inputValue);
  }

  restExampleSubmit(values) {
    this.convertedValue = this.restClientService.getConvertedCurrency(values).pipe(
      map(response => {
        console.log(response);
        return response;
      })
    );
  }

  socketExampleSubmit(values) {
    this.checkSocket(values);
  }
}
