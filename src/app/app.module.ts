import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero/hero.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StackInfoComponent } from './stack-info/stack-info.component';
import { TechnologyComponent } from './stack-info/technology/technology.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ContinueComponent } from './continue/continue.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomeComponent,
    AboutUsComponent,
    StackInfoComponent,
    TechnologyComponent,
    OurMissionComponent,
    ContactComponent,
    FooterComponent,
    ContinueComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
