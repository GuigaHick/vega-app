import { Injectable } from '@angular/core';
//import { Http } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class MakeService {

  constructor(private http: HttpClient) { }

  getMakes() {

    return this.http.get<any[]>('/api/makes');
  }
}
