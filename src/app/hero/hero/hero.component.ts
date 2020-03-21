import { Component, OnInit } from '@angular/core';
import * as zenScroll from 'zenscroll';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
  }

  async onClick() {
    await this.scrollService.scrollToNextComponent(true);
  }
}
