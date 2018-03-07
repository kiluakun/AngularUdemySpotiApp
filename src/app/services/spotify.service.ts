import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  tracks: any[] = [];
  
  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQAXqnGG8rDtfci7f-RifmHy97JLiIKYzgBqXgeUGh2kF6zqcijCvUWSFu5EGeJIMJb9eZhDp6ZZJzskJ3Q';
  

  constructor( public http: HttpClient ) {
    console.log('Spotify service ready to use!');
  }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return headers;
  }

  getTopTracks(id: string){
    let url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;
    let headers = this.getHeaders();

    return this.http.get( url, { headers });
                // .map( ( respuesta: any ) => {
                //   this.tracks = respuesta.tracks;
                //   return this.tracks;
                // });
  }

  getArtista( id: string){
    let url = `${ this.urlSpotify }artists/${ id }`;
    let headers = this.getHeaders();

    return this.http.get( url, { headers });
                // .map( ( respuesta: any ) => {
                //   this.artista = respuesta;
                //   return this.artista;

                // });
  }

  getArtistas( termino: string ){

    let url = `${ this.urlSpotify }search?query=${ termino }&type=artist&market=US&limit=20`;
    let headers = this.getHeaders();

    return this.http.get( url, { headers })
                .map( ( respuesta: any ) => {
                  this.artistas = respuesta.artists.items;
                  return this.artistas;
                });
  }
}
