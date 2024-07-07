
export interface Category {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    name: string;
    unit: string;
    price: number;
    description: string;
    quantity: number;
    image: string;
    category: Category;
}
