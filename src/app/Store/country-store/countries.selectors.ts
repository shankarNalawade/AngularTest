import { createFeatureSelector, createSelector } from "@ngrx/store"
import { CountryDetails } from "./model/countries.model";
import { CountryRegion } from "./model/regions.model"

const storeCountrySelectors = createFeatureSelector<CountryRegion>('countryReducer');

const getCountriesList = createSelector(storeCountrySelectors, (state: CountryRegion): CountryDetails[] => state.countryList ? state.countryList : []);

const getCountryDetails = createSelector(storeCountrySelectors, (state: CountryRegion): CountryDetails =>  state.countryDetail! );

export const CountriesSelectors = {
  getCountriesList,
  getCountryDetails
}
