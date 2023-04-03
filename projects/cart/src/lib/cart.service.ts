import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class CartService {
  products: Product[] = [];

  constructor() {
    console.log('mf-card@1.3.0');
  }

  add(product: Product) {
    this.products.push(product);
  }

  remove(id: number) {
    this.products = this.products.filter(
      (product: Product) => product.id !== id,
    );
  }

  count(): number {
    return this.products.length;
  }

  clear(): void {
    this.products = [];
  }
}
