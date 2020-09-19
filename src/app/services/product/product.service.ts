import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { PRODUCTS } from './PRODUCTS.const';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() { 
    this.products = PRODUCTS;
  }

  public getAllProducts(): Product[] {
    return this.products;
  }

  public getProductById(id: number | string ): Product {
    return this.products.find((product: Product) => product._id.toString() === id);
  }
}
