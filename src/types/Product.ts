export interface BaseProduct {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    color: string[];
    category: string;
    subcategory: string;
    rating: number; 
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
  