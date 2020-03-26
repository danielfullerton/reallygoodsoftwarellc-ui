import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reallygoodsoftwarellc';

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.flash(2000);
  }
}
