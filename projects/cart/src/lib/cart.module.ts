import {
  Inject,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CART_FORROOT_GUARD } from './cart.tokens';
import { CartService } from './cart.service';

export function cartForRootGuard(cartService: CartService): boolean {
  return !!cartService;
}

@NgModule({
  providers: [],
})
export class MfCartModule {
  constructor(
    @Optional() @Inject(CART_FORROOT_GUARD) isAlreadyLoaded: boolean,
  ) {
    if (isAlreadyLoaded) {
      throw new TypeError(
        `*** CartModule.forRoot() called twice. Lazy loaded modules should use CartModule.forChild() instead. ***`,
      );
    }
  }

  static forRoot(): ModuleWithProviders<MfCartModule> {
    return {
      ngModule: MfCartModule,
      providers: [
        CartService,
        {
          provide: CART_FORROOT_GUARD,
          useFactory: cartForRootGuard,
          deps: [[CartService, new Optional(), new SkipSelf()]],
        },
      ],
    };
  }

  static forChild(): ModuleWithProviders<MfCartModule> {
    return {
      ngModule: MfCartModule,
    };
  }
}
