export interface Shoe {
  name: string;
  discount?: number;
  picture: string[];
  description: string;
  isNew: boolean;
  size: string;
  color: string;
  gender: "men" | "women";
  price: number;
  id: string;
}
