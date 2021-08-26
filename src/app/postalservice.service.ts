import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostalserviceService {

  constructor(private http:HttpClient) { }

  getpostaldetails(pincode:any){
    return this.http.get(`https://api.postalpincode.in/pincode/${pincode}`);
  }
}








