import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as xml2js from 'xml-js';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
})
export class OfertaComponent implements OnInit {
  ofertas: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.hola();
  }

  hola() {
    this.http.get('/assets/oferta.xml', { responseType: 'text' }).subscribe(
      (xmlData: string) => {
        const jsonData = xml2js.xml2json(xmlData, { compact: true, spaces: 4 });
        const parsedData = JSON.parse(jsonData);
        this.ofertas = parsedData.ofertas.oferta;
      },
      (error: any) => {
        console.error('Error al cargar el archivo XML:', error);
      }
    );
  }
}
