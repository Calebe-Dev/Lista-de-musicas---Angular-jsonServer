import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musica } from './tabela-de-musicas/musicas';

@Injectable({
  providedIn: 'root'
})
export default class MusicasService {

  private apiUrl = 'http://localhost:3000/Musicas/';

  constructor(private http: HttpClient) { }

    getMusicas():Observable<Musica[]>{
      return this.http.get<Musica[]>(this.apiUrl);
    }
  
}
