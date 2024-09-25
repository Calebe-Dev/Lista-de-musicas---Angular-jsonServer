import { Component } from '@angular/core';
import { Musica } from './musicas';

@Component({
  selector: 'app-tabela-de-musicas',
  templateUrl: './tabela-de-musicas.component.html',
  styleUrl: './tabela-de-musicas.component.css'
})
export class TabelaDeMusicasComponent {
  musicas: Musica[] = [
    {
      "id": 1,
      "name": "Bohemian Rhapsody",
      "note": 9.99,
      "category": "Rock",
      "artist": "Queen",
      "year": 1975
    },
    {
      "id": 2,
      "name": "Hotel California",
      "note": 9.99,
      "category": "Rock",
      "artist": "Eagles",
      "year": 1976
    },
    // Outros objetos de música...
  ];
}

