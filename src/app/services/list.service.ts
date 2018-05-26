import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(public http: Http) { }

  getList () {
    return this.http.get('http://noah.up.edu.ph/api/four_hour_forecast').pipe(map(res => res.json()));
  }
}
