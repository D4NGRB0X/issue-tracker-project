import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  constructor( private readonly _httpClient: HttpClient, ) { }
  getPendingIssues(): Observable<any> {
    return this._httpClient.get('http://localhost:3000/api/issues');
  }
}
