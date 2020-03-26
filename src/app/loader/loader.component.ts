import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading = true;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loaderService.loaderState.subscribe((state: boolean) => {
      this.loading = state;
    });
  }
}
