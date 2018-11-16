import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http: HttpClient ) { }
  getItems(category: number, letter: string, page: number ) {
    return this.http.get(
      // '/exchange/summary.json');

      // 'http://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=21787');

    // return this.http.get(
      '/api/catalogue/items.json?category=' + category + '&alpha=' + letter + '&page=' + page);
  }

}
