import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryDetails } from 'src/app/Store/country-store/model/countries.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }
  baseApiUrl = 'https://restcountries.com/v2/region/';

  getRegionData(region:string) {
    return this.http.get(this.baseApiUrl + region);
  }

  formatCountriesData(list: any) {
    const updatedList = list.map((item: any) => {
      const obj: CountryDetails = {
        countryName: item.name,
        capital: item.capital,
        population: item.population,
        currencies: item.currencies[0],
        flag: item.flag
      }
      return obj;
    })
    return {
      payload:updatedList
    }
  }
}
