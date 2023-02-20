import { CountryDetails } from "./countries.model";

export const STORE_REGION_NAMESPACE = 'region';

export interface Status {
  success: boolean;
  error:Error;
  loading: boolean
}
export interface CountryRegion {
  status:Status;
  countryList: CountryDetails[];
  countryDetail: CountryDetails | null;
}

export interface DropdownList {
  id?: number;
  name: string;
}
