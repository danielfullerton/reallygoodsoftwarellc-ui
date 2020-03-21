import { Injectable, OnInit } from '@angular/core';
import * as zenScroll from 'zenscroll';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollActivated = false;
  private aboutUs: HTMLElement;
  private technologies: HTMLElement;
  private mission: HTMLElement;
  private contact: HTMLElement;
  private nextComponent: HTMLElement;

  activated = new Subject<boolean>();

  constructor() {
    window.onscroll = () => {
      if (!this.nextComponent) return;

      const y = window.scrollY + (window.outerHeight - window.innerHeight + 50);
      if (y >= this.aboutUs.offsetTop && y < this.technologies.offsetTop) {
        this.nextComponent = this.technologies;
      } else if (y >= this.technologies.offsetTop && y < this.mission.offsetTop) {
        this.nextComponent = this.mission;
      } else if (y >= this.mission.offsetTop && y < this.contact.offsetTop) {
        this.nextComponent = this.contact;
      }
    }
  }

  setIfNeeded() {
    if (!this.aboutUs) {
      this.aboutUs = document.getElementById('about-us');
    }
    if (!this.technologies) {
      this.technologies = document.getElementById('stack-info');
    }
    if (!this.mission) {
      this.mission = document.getElementById('our-mission');
    }
    if (!this.contact) {
      this.contact = document.getElementById('contact');
    }
    if (!this.nextComponent) {
      this.nextComponent = this.aboutUs;
    }
  }

  scrollToNextComponent(start = false): Promise<void> {
    this.setIfNeeded();
    if (start) {
      this.nextComponent = this.aboutUs;
    }
    this.scrollActivated = true;
    this.activated.next(true);

    return new Promise(resolve => {
      if (this.nextComponent === this.contact) {
        this.scrollActivated = false;
        this.activated.next(false);
      }
      zenScroll.to(this.nextComponent, 500, resolve);
    });
  }

  getScrollActivated() {
    return this.scrollActivated;
  }
}
