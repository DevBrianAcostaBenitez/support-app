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
    return this.http.post(this.baseUrl + "/requests",request);
  }
  getRequests():Observable<Request2[]>{
    return this.http.get<Request2[]>(this.baseUrl + "/requests");
  }
  getRequestbyId(id : number): Observable<Request2>
  {
    return this.http.get<Request2>(this.baseUrl +"/requests/"+id);
  }
  updateRequest(id: number, data: Request2): Observable<Request2> {
    return this.http.put<Request2>(this.baseUrl +"/requests/"+ id,data);
  }
}
