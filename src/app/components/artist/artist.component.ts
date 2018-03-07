import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  tracks: any[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               public _spotifyService: SpotifyService ) { }

  ngOnInit() {
    this.activatedRoute.params
          .map( params => params['id'] )
          .subscribe( id => {
            //console.log(id);
            this._spotifyService.getArtista(id)
                  .subscribe( artista => {
                    this.artista = artista;
                    console.log( this.artista );
                  });

            this._spotifyService.getTopTracks(id)
                  .map( (respuesta: any) => respuesta.tracks)
                  .subscribe( tracks => {
                    this.tracks = tracks;
                    console.log( this.tracks );
                  });
          })
  }

  abrirEnSpotify(urlArtista: string){
    window.open(urlArtista);
  }

}
