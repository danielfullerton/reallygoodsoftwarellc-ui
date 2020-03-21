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
  requestError: string;
  messageSent = false;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  async onSubmit() {
    const { name, email, phone, message } = this.form.value as FormContents;
    const [e, r]: [HttpErrorResponse, any] = await to(this.contactService.sendEmail(name, email, message, phone));
    if (e) {
      this.requestError = 'Something went wrong. Please try again later or email us for help.'
    } else {
      this.requestError = null;
      this.messageSent = true;
      console.log(r);
      // todo: thanks dialog
    }
  }
}
