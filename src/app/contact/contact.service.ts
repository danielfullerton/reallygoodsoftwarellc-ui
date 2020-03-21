import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, phone: string, message: string) {
    return this.http.post('/api/contact', {
      name,
      email,
      phone,
      message
    }).toPromise();
  }
}
