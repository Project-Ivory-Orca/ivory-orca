export type Product = {
    id: number;
    name: string;
    decription: string;
    brand: string;
    price: number;
    rating: number;
    numberOfReviews: number;
    imageURL: string;
    };
export const emptyProducts: Product[] = [];