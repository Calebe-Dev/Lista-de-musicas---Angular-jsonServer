import { Component } from '@angular/core';
import { Musica } from './musicas';
import MusicasService from '../musicas.service';

@Component({
  selector: 'app-tabela-de-musicas',
  templateUrl: './tabela-de-musicas.component.html',
  styleUrl: './tabela-de-musicas.component.css'
})
export class TabelaDeMusicasComponent {
  musicas: Musica[] = [];
 constructor(private musicasService: MusicasService) {};

  ngOnInit(): void {
    this.musicasService.getMusicas().subscribe(data => {
      this.musicas = data;
    });
}
}