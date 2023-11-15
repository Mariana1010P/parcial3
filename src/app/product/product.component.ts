import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  product: Product[]=[]

  constructor(private productService: ProductService){}

  
}
