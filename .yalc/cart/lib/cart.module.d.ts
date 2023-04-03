import { ModuleWithProviders } from '@angular/core';
import { CartService } from './cart.service';
import * as i0 from "@angular/core";
export declare function cartForRootGuard(cartService: CartService): boolean;
export declare class CartModule {
    constructor(isAlreadyLoaded: boolean);
    static forRoot(): ModuleWithProviders<CartModule>;
    static forChild(): ModuleWithProviders<CartModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CartModule, [{ optional: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CartModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CartModule>;
}
