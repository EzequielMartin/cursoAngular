import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio listo');
  }

  getQuery( query: string): any{

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer placeholder'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(): any {

    return this.getQuery('browse/new-releases?limit=30')
               .pipe( map( data => {
                 return data['albums'].items;
               }));
  }

  getArtistas( termino: string ): any{

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe( map( data => {
                 return data['artists'].items;
               }));
  }

  getArtista( id: string ): any{
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id: string ): any{
    return this.getQuery(`artists/${id}/top-tracks?country=ar`)
               .pipe( map( data => {
                 return data['tracks'];
               }));
  }
}
