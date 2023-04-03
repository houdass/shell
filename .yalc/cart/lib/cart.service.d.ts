import { Product } from './product.model';
import * as i0 from "@angular/core";
export declare class CartService {
    products: Product[];
    constructor();
    add(product: Product): void;
    remove(id: number): void;
    count(): number;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CartService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CartService>;
}
