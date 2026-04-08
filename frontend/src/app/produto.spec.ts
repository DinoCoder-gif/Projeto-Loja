import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://localhost:8080/api/produtos'; // Endereço do seu Java

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
