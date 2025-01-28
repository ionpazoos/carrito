import { Product } from "../types/types";

type ProductListProps = {
  addToCart: (product: Product) => void;
};

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 800 },
];

const ProductList = ({ addToCart }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition transform hover:-translate-y-1"
        >
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600 mb-3">Precio: ${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;