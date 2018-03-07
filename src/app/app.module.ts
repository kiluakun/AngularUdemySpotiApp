import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Router
import { APP_ROUTING } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';

// Services
import { SpotifyService } from './services/spotify.service';

// Pipes
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [
    SinfotoPipe,
    DomseguroPipe,
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
