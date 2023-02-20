import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { REGIONS } from '../Shared/model/region.constant';
import { CountryDetails } from '../Store/country-store/model/countries.model';
import { DropdownList, CountryRegion } from '../Store/country-store/model/regions.model';
import { CountriesSelectors } from '../Store/country-store/countries.selectors';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  regionsLabel: string;
  countryLabel: string;
  regions: DropdownList[];
  countriesMap: DropdownList[];
  countries$: Observable<CountryDetails[]>;

  constructor(private store: Store<CountryRegion>) {
    this.regionsLabel = 'Regions';
    this.countryLabel = 'Countries';
    this.regions = [];
    this.countriesMap = [];
    this.countries$ = this.store.pipe(select(CountriesSelectors.getCountriesList));
    this.countries$.subscribe((countryList:CountryDetails[]) => {
      if (countryList) {
        this.countriesMap = countryList.map((item) => {
          const obj = {
            name: item.countryName
          }
          return obj;
        });
      }

    });
  }
  ngOnInit(): void {
    this.regions = REGIONS;
  }

}
