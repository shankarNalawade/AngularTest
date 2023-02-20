import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { map, switchMap, catchError } from 'rxjs/operators';
import { CountriesService } from "src/app/Shared/Services/countries.service"
import { EMPTY } from 'rxjs';
import { CountryActionTypes,  GetCountriesSuccess } from "./countries.action";

@Injectable()
export class CountriesEffect {

  getRegionData$ = createEffect(() => this.actions$.pipe(
    ofType(CountryActionTypes.GetCountriesRequest),
    map((action: any) => action.payload),
    switchMap((payload: string) => this.countriesService.getRegionData(payload)
      .pipe(
     map((result) => GetCountriesSuccess(this.countriesService.formatCountriesData(result))),
        catchError(() => EMPTY)
      ))
  ));

  constructor(private actions$: Actions, private countriesService: CountriesService) { }
}
