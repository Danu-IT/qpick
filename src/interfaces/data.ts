export interface ProdictI {
    id: string;
    model: string;
    categoryID: number;
    brandID: number;
    imageURl: string;
    colorId: number;
    price: string;
}

export interface ProdictCurrentI {
    id: string;
    model: string;
    categoryID: number;
    brandID: number;
    imageURl: string[] ;
    colorId: number[] ;
    price: string;
    qt?: number;
}