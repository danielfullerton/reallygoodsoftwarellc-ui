import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.scss']
})
export class ContinueComponent implements OnInit {
  activated = false;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.activated.subscribe(val => {
      this.activated = val;
    });
  }

  async onClick() {
    if (!this.activated) return;
    await this.scrollService.scrollToNextComponent();
  }

}
