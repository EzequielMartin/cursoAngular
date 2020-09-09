import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  loading: boolean;
  artista: any = {};
  topTracks: any[] = [];

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService ) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtista( params.id );
      this.getTopTracks( params.id );
    });
   }

  ngOnInit(): void {
  }

  getArtista( id: string ): any{

    this.loading = true;
    this.spotify.getArtista( id )
                .subscribe(artista => {
                  console.log( artista );
                  this.artista = artista;
                  this.loading = false;
                });
  }

  getTopTracks ( id: string ): any{

    this.spotify.getTopTracks( id )
                .subscribe( topTracks => {
                  this.topTracks = topTracks;
                  console.log( topTracks );
                });
  }

}
