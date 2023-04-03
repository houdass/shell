import { Gender } from './gender.model';
export interface Product {
    id: number;
    brand: string;
    name: string;
    size: number;
    price: number;
    gender: Gender;
    image: string;
}
