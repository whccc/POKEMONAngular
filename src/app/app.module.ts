import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/cpnavbar/navbar.component';
import { CPfooterComponent } from './components/cpfooter/cpfooter.component';
import { CpsearchComponent } from './components/cpsearch/cpsearch.component';
import { CpcardpokemonComponent } from './components/cpcardpokemon/cpcardpokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutpageComponent,
    NavbarComponent,
    CPfooterComponent,
    CpsearchComponent,
    CpcardpokemonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
