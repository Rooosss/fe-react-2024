import type ProductCategory from './Category.ts';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: Array<string>;
    creationAt: string;
    updatedAt: string;
    category: ProductCategory;
}

export default Product;
