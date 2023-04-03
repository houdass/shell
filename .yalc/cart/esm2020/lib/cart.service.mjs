import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CartService {
    constructor() {
        this.products = [];
    }
    add(product) {
        this.products.push(product);
    }
    remove(id) {
        this.products = this.products.filter((product) => product.id !== id);
    }
    count() {
        return this.products.length;
    }
    clear() {
        this.products = [];
    }
}
CartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: CartService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: CartService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: CartService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY2FydC9zcmMvbGliL2NhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUkzQyxNQUFNLE9BQU8sV0FBVztJQUd0QjtRQUZBLGFBQVEsR0FBYyxFQUFFLENBQUM7SUFFVixDQUFDO0lBRWhCLEdBQUcsQ0FBQyxPQUFnQjtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQVU7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUNsQyxDQUFDLE9BQWdCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUN4QyxDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUs7UUFDSCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7d0dBckJVLFdBQVc7NEdBQVgsV0FBVzsyRkFBWCxXQUFXO2tCQUR2QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0U2VydmljZSB7XG4gIHByb2R1Y3RzOiBQcm9kdWN0W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYWRkKHByb2R1Y3Q6IFByb2R1Y3QpIHtcbiAgICB0aGlzLnByb2R1Y3RzLnB1c2gocHJvZHVjdCk7XG4gIH1cblxuICByZW1vdmUoaWQ6IG51bWJlcikge1xuICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RzLmZpbHRlcihcbiAgICAgIChwcm9kdWN0OiBQcm9kdWN0KSA9PiBwcm9kdWN0LmlkICE9PSBpZCxcbiAgICApO1xuICB9XG5cbiAgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0cy5sZW5ndGg7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gIH1cbn1cbiJdfQ==