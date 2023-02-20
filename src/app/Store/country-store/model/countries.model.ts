export interface CountryDetails {
  countryName: string;
  capital?: string;
  population?: string;
  flag?:string;
  currencies?: Currencies[];
}

export interface Currencies{
  name:string;
  code:string;
  symbol:string;
}
