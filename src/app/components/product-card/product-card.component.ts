import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product: Product;

  constructor(private router: Router){}

  ngOnInit(): void {}

  public getUrl(): string {
    return this.router.url;
  }
}
