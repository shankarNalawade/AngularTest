import { createAction, props } from '@ngrx/store';
import { CountryDetails } from './model/countries.model';

export enum CountryActionTypes {
  GetCountriesRequest = '[Country] Get Countries Data Request',
  GetCountriesSuccess = '[Country] Get Countries Data Success',
  GetCountryDetailRequest = '[Country] Get Country Detail Request',
  GetCountryDetailSuccess = '[Country] Get Country Detail Success',
}

export const GetCountriesRequest = createAction('[Country] Get Countries Data Request', props<{ payload: string }>());
export const GetCountriesSuccess = createAction('[Country] Get Countries Data Success', props<{ payload: CountryDetails[] }>());

export const GetCountryDetailRequest = createAction('[Country] Get Country Detail Request', props<{ payload: string }>());
export const GetCountryDetailSuccess = createAction('[Country] Get Country Detail Success', props<{ payload: CountryDetails }>());
