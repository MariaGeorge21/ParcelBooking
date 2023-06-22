import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parcel } from './model/parcel';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {

  private baseURL = "http://localhost:8090/parcels";




  constructor(private httpClient: HttpClient) { }
  
  addParcel(parcel:Parcel): Observable<Parcel>{
  
  return this.httpClient.post<Parcel>(`${this.baseURL}/add`, parcel);
  
  
  
  
    }
}
