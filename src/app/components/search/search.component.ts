import { Component } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  termino: string = '';

  constructor( public _spotifyService: SpotifyService ) { }

  buscarArtista(){

    console.log( this.termino );

    if(this.termino.length == 0){
      return;
    }

    this._spotifyService.getArtistas( this.termino )
            .subscribe( 
              // artistas => {
              //   //console.log( 'Información lista!', artistas );
              // }
            );
  }

}
