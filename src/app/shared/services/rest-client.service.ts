import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UiCurrencyModel, CurrencyResponse } from '../models/current.models';

@Injectable()
export class RestClientService {
    serverUrl = 'http://localhost:8040/';
    constructor(private http: HttpClient) {
    }

    public getConvertedCurrency(currencyInput: UiCurrencyModel): Observable<CurrencyResponse> {
        // mock 
        const mockData: CurrencyResponse = 
        {
            responseTime: new Date(),
            convertedValue: {
                value: currencyInput.value * 2 * Math.floor(Math.random() * (10 - 100) + 100) / 100,
                currencyType: currencyInput.currencyType
            },
            originalValue: currencyInput
        }
        return of(mockData);
        // return this.http.post<CurrencyResponse>(this.serverUrl + 'convertedValue', currencyInput)
    }
}