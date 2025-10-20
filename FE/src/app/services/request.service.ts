import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InboxItem } from '../../../../BE/src/request/request.inteface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getInboxItems(): Observable<InboxItem[]> {
    return this.http.get<InboxItem[]>(`${this.apiUrl}/requests`);
  }
}
