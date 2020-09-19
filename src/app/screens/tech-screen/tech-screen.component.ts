import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-tech-screen',
  templateUrl: './tech-screen.component.html',
  styleUrls: ['./tech-screen.component.css']
})
export class TechScreenComponent implements OnInit {
  public products: Product[];
  public filterProducts: Product[];
  public brands: string[];
  public selectedBrand: any;
  public search: FormControl;

  constructor(private productService: ProductService){
    this.products = this.productService.getAllProducts();
    this.filterProducts = this.products;
    this.brands = this.productsBrands();
    this.search = new FormControl('');
  }
  
  ngOnInit(): void {
    this.search.valueChanges.subscribe((key) => {
      console.log(key);
    });
  }

  private productsBrands(): string[] {
    let brands: string[] = [];
    for (let i = 0;  i < this.products.length;  i++) {
      if( brands.includes(this.products[i].brand) == false){
        brands.push(this.products[i].brand);
      }
    }
    return brands;
  }
  
  public selectBrand(brand: any): void {
    this.selectedBrand = brand;
    this.filterProducts = this.products.filter((product: Product) => product.brand === brand);
  }

}
