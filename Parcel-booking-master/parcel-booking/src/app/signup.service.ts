import { HttpClient } from "@angular/common/http";
import { Observable, catchError, tap } from "rxjs";
// import { Customer, Signup } from "./model/customer";
import { Injectable } from "@angular/core";
import { Customer } from "./model/customer";
@Injectable({
    providedIn: 'root' // Add this to make the service available at root level
  })
export class SignupService {
private baseURL = "http://localhost:8091/customer";
  
    constructor(private httpClient: HttpClient) { }
    add(c: Customer): Observable<Customer> {
      console.log('add() called with:', c);
    
      return this.httpClient.post<Customer>(`${this.baseURL}/add`,c )
        .pipe(
          tap(response => console.log('add() response:', response)),
          catchError(error => {
            console.error('add() error:', error);
            throw error;
          })
        );
    }
    
    
  
    // addParcel(c:Customer): Observable<Customer>{
  
    // return this.httpClient.post<Customer>(`${this.baseURL}/add`, c);
    // }
    private apiUrl = 'http://localhost:8091/customer'; // Replace with your backend API URL
      checkUsernameExists(customername: string) {
  
        return this.httpClient.get<boolean>(`${this.baseURL}/checkusername/${customername}`);
  
      }
  
  }