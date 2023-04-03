import { Inject, NgModule, Optional, SkipSelf, } from '@angular/core';
import { CART_FORROOT_GUARD } from './cart.tokens';
import { CartService } from './cart.service';
import * as i0 from "@angular/core";
export function cartForRootGuard(cartService) {
    return !!cartService;
}
export class CartModule {
    constructor(isAlreadyLoaded) {
        if (isAlreadyLoaded) {
            throw new TypeError(`*** CartModule.forRoot() called twice. Lazy loaded modules should use CartModule.forChild() instead. ***`);
        }
    }
    static forRoot() {
        return {
            ngModule: CartModule,
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
    static forChild() {
        return {
            ngModule: CartModule,
        };
    }
}
CartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: CartModule, deps: [{ token: CART_FORROOT_GUARD, optional: true }], target: i0.ɵɵFactoryTarget.NgModule });
CartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.1", ngImport: i0, type: CartModule });
CartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: CartModule, providers: [CartService] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: CartModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [CartService],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [CART_FORROOT_GUARD]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jYXJ0L3NyYy9saWIvY2FydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLE1BQU0sRUFFTixRQUFRLEVBQ1IsUUFBUSxFQUNSLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUU3QyxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsV0FBd0I7SUFDdkQsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDO0FBQ3ZCLENBQUM7QUFLRCxNQUFNLE9BQU8sVUFBVTtJQUNyQixZQUMwQyxlQUF3QjtRQUVoRSxJQUFJLGVBQWUsRUFBRTtZQUNuQixNQUFNLElBQUksU0FBUyxDQUNqQiwwR0FBMEcsQ0FDM0csQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVCxXQUFXO2dCQUNYO29CQUNFLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFVBQVUsRUFBRSxnQkFBZ0I7b0JBQzVCLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RDthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUTtRQUNiLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtTQUNyQixDQUFDO0lBQ0osQ0FBQzs7dUdBN0JVLFVBQVUsa0JBRUMsa0JBQWtCO3dHQUY3QixVQUFVO3dHQUFWLFVBQVUsYUFGVixDQUFDLFdBQVcsQ0FBQzsyRkFFYixVQUFVO2tCQUh0QixRQUFRO21CQUFDO29CQUNSLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpQkFDekI7OzBCQUdJLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0LFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENBUlRfRk9SUk9PVF9HVUFSRCB9IGZyb20gJy4vY2FydC50b2tlbnMnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICcuL2NhcnQuc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXJ0Rm9yUm9vdEd1YXJkKGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gISFjYXJ0U2VydmljZTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbQ2FydFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0TW9kdWxlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChDQVJUX0ZPUlJPT1RfR1VBUkQpIGlzQWxyZWFkeUxvYWRlZDogYm9vbGVhbixcbiAgKSB7XG4gICAgaWYgKGlzQWxyZWFkeUxvYWRlZCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgYCoqKiBDYXJ0TW9kdWxlLmZvclJvb3QoKSBjYWxsZWQgdHdpY2UuIExhenkgbG9hZGVkIG1vZHVsZXMgc2hvdWxkIHVzZSBDYXJ0TW9kdWxlLmZvckNoaWxkKCkgaW5zdGVhZC4gKioqYCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDYXJ0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDYXJ0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENhcnRTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ0FSVF9GT1JST09UX0dVQVJELFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNhcnRGb3JSb290R3VhcmQsXG4gICAgICAgICAgZGVwczogW1tDYXJ0U2VydmljZSwgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpXV0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDYXJ0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDYXJ0TW9kdWxlLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==