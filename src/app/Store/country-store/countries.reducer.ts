
import { Action, createReducer, on } from '@ngrx/store';
import { GetCountryDetailRequest, GetCountriesRequest, GetCountriesSuccess } from './countries.action';
import { CountryRegion } from './model/regions.model';
import { Status } from './model/regions.model';
import { CountryDetails } from './model/countries.model';

export const STATUS_INITIAL_STATE: Status = {
  loading: false,
  success: false,
  error: new Error('no error')
}

export const REGION_INITIAL_STATE: CountryRegion = {
  status: STATUS_INITIAL_STATE,
  countryList: [],
  countryDetail: null
};


export const reducer = createReducer(
  REGION_INITIAL_STATE,
  on(GetCountriesRequest, (state, action) => ({
    ...state,
    status: {
      loading: true,
      success: false,
      error: new Error('no error')
    }
  })),
  on(GetCountriesSuccess, (state: CountryRegion, action): CountryRegion => {
    return {
      ...state,
      countryList: [...action.payload],
      status: {
        loading: false,
        success: true,
        error: new Error('no error')
      }
    }
  }),
  on(GetCountryDetailRequest, (state: CountryRegion, action): CountryRegion => {
    const selectedCountryName = action.payload;
    const countryDetails = state.countryList.find(countries => countries.countryName === selectedCountryName);
    return {
      ...state,
      countryDetail: countryDetails as CountryDetails,
      status: {
        loading: false,
        success: true,
        error: new Error('no error')
      }
    }
  })
);

export function countryReducer(state: CountryRegion | undefined, action: Action) {
  return reducer(state, action);
}
