import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @ViewChild('fadeInBlobs', { static: false })
  fadeInBlobs: ElementRef<HTMLElement>;

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {

  }

  async onClick() {
    await this.scrollService.scrollToNextComponent(true);
  }
}
