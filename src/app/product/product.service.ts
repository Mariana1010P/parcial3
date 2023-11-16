import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      nombre: 'Laptop 1',
      precio: '$19.99',
      descripcion: 'Descripción del producto 1',
      url: 'https://media.es.wired.com/photos/631ec3ef64fe55a038bdc9a8/4:3/w_1614,h_1211,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg',
      promocion: true
    },
    {
      nombre: 'Laptop 2',
      precio: '$29.99',
      descripcion: 'Descripción del producto 2',
      url: 'https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg',
      promocion: false
    },
    {
      nombre: 'Laptop 3',
      precio: '$14.99',
      descripcion: 'Descripción del producto 3',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzhdN3z2V4gJkmjXXBEUHir-a0cQPr--3eg&usqp=CAU',
      promocion: true
    },
  ];

  private productsKey = 'productos';

  constructor() {
    const storedProducts = sessionStorage.getItem(this.productsKey);
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    }
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getAllProductsFilter(): Product[] {
    return this.products.filter(product => product.promocion === true);
  }

  guardarEnSessionStorage() {
    const objetoString = JSON.stringify(this.products);
    sessionStorage.setItem(this.productsKey, objetoString);
  }

}
