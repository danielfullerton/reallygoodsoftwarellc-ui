import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero/hero.component';
import { MenuComponent } from './hero/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StackInfoComponent } from './stack-info/stack-info.component';
import { TechnologyComponent } from './stack-info/technology/technology.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    MenuComponent,
    HomeComponent,
    AboutUsComponent,
    StackInfoComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
