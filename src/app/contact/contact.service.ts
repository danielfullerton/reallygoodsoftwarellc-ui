import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, message: string, phone?: string) {
    const request: any = {
      name,
      email,
      message
    };
    if (phone) {
      request.phone = phone;
    }
    return this.http.post('/api/contact', request).toPromise();
  }
}
