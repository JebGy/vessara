export interface BaseProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  color: string[];
  category: Category;
  subcategory: string;
  rating: number;
}

export enum Category {
  ROPA = "Ropa",
  CALZADO = "Calzado",
  ACCESORIOS = "Accesorios",
}

export enum Subcategory {
  HOMBRE = "hombre",
  MUJER = "mujer",
}

export interface Ropa extends BaseProduct {
  material: string;
  talla: string;
}

export interface Zapatilla extends BaseProduct {
  talla: string;
  tipoSuela: string;
  material: string;
}

export interface Accesorio extends BaseProduct {
  material: string;
  uso: string;
}
