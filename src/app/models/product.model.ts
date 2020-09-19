interface Features{

}

export interface Product{
  _id: number | string;
  imgUrl: string;
  brand: string;
  name: string;
  seller: string;
  price: number;
  color?: string;
  features?: Features;
};
