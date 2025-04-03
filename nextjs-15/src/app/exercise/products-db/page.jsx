import Link from "next/link";

// actions
import { getProducts } from "@/prisma-db";

export default async function ProductsDBPage() {
  // fetch products from db directly here
  const products = [
    { id: 1, title: "Title 1", description: "description 1", price: "100" },
    { id: 2, title: "Title 2", description: "description 2", price: "200" },
  ];

  return (
    <section className="flex flex-col space-y-4 p-4">
      <h1 className="text-3xl font-semibold">Products</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-4 bg-white text-gray-700 shadow-md rounded-lg"
          >
            <Link
              href={`/products-db/${product.id}`}
              className="text-xl font-semibold"
            >
              {product.title}
            </Link>
            <p>{product.description}</p>
            <p className="text-lg font-medium">${product.price}</p>
            <button className="bg-red-500 text-white px-4 rounded mt-2 py-1">
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Link
        href="/create-product-server"
        className="p-3 bg-blue-500 w-fit rounded-md"
      >
        Add product
      </Link>
    </section>
  );
}
