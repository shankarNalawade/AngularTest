import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountryDetails } from '../Store/country-store/model/countries.model';
import { CountryRegion } from '../Store/country-store/model/regions.model';
import { CountriesSelectors } from '../Store/country-store/countries.selectors';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  getCountryDetail$: Observable<CountryDetails>;
  countryDetails: CountryDetails | null;
  currencies: any;
  constructor(private store: Store<CountryRegion>) {
    this.countryDetails = null;
    this.getCountryDetail$ = this.store.pipe(select(CountriesSelectors.getCountryDetails));
    this.getCountryDetail$.subscribe((countryDetail: CountryDetails) => {
      if (countryDetail) {
        this.countryDetails = countryDetail;
        this.currencies = this.countryDetails.currencies;
      }

    });
  }

  ngOnInit(): void {

  }

}
