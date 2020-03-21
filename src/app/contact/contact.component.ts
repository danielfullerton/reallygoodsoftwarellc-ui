import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ContactService } from './contact.service';
import to from 'await-to-js';

export interface FormContents {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('contactForm', { static: true })
  form: NgForm;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  async onSubmit() {
    const { name, email, phone, message } = this.form.value as FormContents;
    const [e, r]: [HttpErrorResponse, any] = await to(this.contactService.sendEmail(name, email, phone, message));
    if (e && e.status === 400) {
      location.reload(); // Just reload the page if you're playing with client side stuff.
    } else if (e) {
      // todo: error dialog
    } else {
      // todo: thanks dialog
    }
  }
}
