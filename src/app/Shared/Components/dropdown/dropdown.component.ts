import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetCountryDetailRequest, GetCountriesRequest } from '../../../Store/country-store/countries.action';
import { DropdownList, CountryRegion } from '../../../Store/country-store/model/regions.model';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor(private store: Store<CountryRegion>) {

   }
  @Input() label = '';
  @Input() dropdownData: DropdownList[] = [];
  ngOnInit(): void {
  }
  onChangeRegions(event: any) {
    if (event.value === 'Asia' || event.value === 'Europe') {
      this.store.dispatch(GetCountriesRequest({ payload: event.value }));
    } else {
    this.store.dispatch(GetCountryDetailRequest({payload:event.value}));
    }
  }

}
