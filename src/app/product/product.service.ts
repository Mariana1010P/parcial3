import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      nombre: 'Producto 1',
      precio: '$19.99',
      descripcion: 'Descripción del producto 1',
      url: 'https://ejemplo.com/producto1.jpg',
      promocion: true
    },
    {
      nombre: 'Producto 2',
      precio: '$29.99',
      descripcion: 'Descripción del producto 2',
      url: 'https://ejemplo.com/producto2.jpg',
      promocion: false
    },
    {
      nombre: 'Producto 3',
      precio: '$14.99',
      descripcion: 'Descripción del producto 3',
      url: 'https://ejemplo.com/producto3.jpg',
      promocion: true
    },
    
  ];

  guardarEnSessionStorage() {
    const objetoString = JSON.stringify(this.products);
    sessionStorage.setItem('product', objetoString);
  }
  
  constructor() { }
}
