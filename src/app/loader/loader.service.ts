import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaderState = new Subject<boolean>();

  constructor() { }

  show() {
    this.loaderState.next(true);
  }

  hide() {
    this.loaderState.next(false);
  }

  flash(timeout: number = 2000) {
    this.loaderState.next(true);
    setTimeout(() => {
      this.loaderState.next(false);
    }, timeout);
  }
}
