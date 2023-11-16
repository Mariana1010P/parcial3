import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProductsFilter();
  }

}
