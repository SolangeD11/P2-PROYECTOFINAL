import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css'],
})
export class JsonComponent implements OnInit {
  ofertas: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/assets/perfil.json').subscribe(
      (data: any) => {
        this.ofertas = data.ofertas;
      },
      (error: any) => {
        console.error('Error al cargar el archivo JSON:', error);
      }
    );
  }


}
