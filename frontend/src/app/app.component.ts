import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div style="text-align:center; padding: 50px;">
      <h1 style="color: #c3002f;">Angular + Spring Boot</h1>
      <h2>Lista de Produtos da Loja:</h2>
      <div *ngFor="let p of produtos" style="border: 1px solid #ddd; margin: 10px; padding: 10px;">
        {{ p }}
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  produtos: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<string[]>('http://localhost:8080/api/produtos')
      .subscribe(dados => this.produtos = dados);
  }
}
