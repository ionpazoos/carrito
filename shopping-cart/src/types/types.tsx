// Representa un producto genérico
export type Product = {
    id: number;
    name: string;
    price: number;
  };
  
  // Representa un producto en el carrito (con cantidad incluida)
  export type CartItem = Product & {
    quantity: number;
  };