import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: any[];
  constructor() {
    this.productos = [
      {
        tipo: 'proteinas',
        imagen: './../../assets/img/tipo-productos/proteinas/1.jpg'
      },
      {
        tipo: 'proteinas',
        imagen: './../../assets/img/tipo-productos/proteinas/2.jpg'
      },
      {
        tipo: 'proteinas',
        imagen: './../../assets/img/tipo-productos/proteinas/3.jpg'
      },
      {
        tipo: 'herbales',
        imagen: './../../assets/img/tipo-productos/herbales/1.jpg'
      },
      {
        tipo: 'herbales',
        imagen: './../../assets/img/tipo-productos/herbales/2.jpg'
      },
      {
        tipo: 'herbales',
        imagen: './../../assets/img/tipo-productos/herbales/3.jpg'
      },
      {
        tipo: 'herbales',
        imagen: './../../assets/img/tipo-productos/herbales/4.jpg'
      },
      {
        tipo: 'suplementos',
        imagen: './../../assets/img/tipo-productos/suplementos/1.jpg'
      },
      {
        tipo: 'suplementos',
        imagen: './../../assets/img/tipo-productos/suplementos/2.jpg'
      },
      {
        tipo: 'suplementos',
        imagen: './../../assets/img/tipo-productos/suplementos/3.jpg'
      },
      {
        tipo: 'belleza',
        imagen: './../../assets/img/tipo-productos/belleza/1.jpg'
      },
      {
        tipo: 'belleza',
        imagen: './../../assets/img/tipo-productos/belleza/2.jpg'
      },
      {
        tipo: 'belleza',
        imagen: './../../assets/img/tipo-productos/belleza/3.jpg'
      }
    ];
  }

  getProductos() {
    return this.productos;
  }
}
