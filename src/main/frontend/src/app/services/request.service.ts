import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Request2 } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
private baseUrl = 'http://localhost:8081'
  constructor(private http:HttpClient) {  }
  createRequest(request:object):Observable<object>{
    return this.http.post(this.baseUrl,request);
  }
  getRequests():Observable<Request2[]>{
    return this.http.get<Request2[]>(this.baseUrl + "/requests");
  }
}
