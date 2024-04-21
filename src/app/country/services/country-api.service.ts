import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  baseUrl = 'https://restcountries.com/v2/region/americas?fields=name,alpha3Code,capital,area,population,flag'

  constructor(private http : HttpClient) { }

  getCountries(){
    return this.http.get(this.baseUrl)
  }

}
