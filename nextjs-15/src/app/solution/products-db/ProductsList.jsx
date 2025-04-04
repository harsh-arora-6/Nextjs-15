"use client";
import Link from "next/link";
import { useOptimistic } from "react";

// actions
import { removeProduct } from "@/app/solution/actions/product";

export default function ProductsList({ products }) {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currProducts, productId) => {
      return currProducts.filter((currProduct) => currProduct.id != productId);
    }
  );

  const removeProductById = async (id) => {
    setOptimisticProducts(id);
    await removeProduct(id);
  };

  return (
    <section className="flex flex-col space-y-4 p-4">
      <h1 className="text-3xl font-semibold">Products</h1>
      <ul className="space-y-4">
        {optimisticProducts.map((product) => (
          <li
            key={product.id}
            className="p-4 bg-white text-gray-700 shadow-md rounded-lg"
          >
            <Link
              href={`/solution/products-db/${product.id}`}
              className="text-xl font-semibold"
            >
              {product.title}
            </Link>
            <p>{product.description}</p>
            <p className="text-lg font-medium">${product.price}</p>
            <form action={removeProductById.bind(null, product.id)}>
              <button className="bg-red-500 text-white px-4 rounded mt-2 py-1">
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
      <Link
        href="/solution/create-product-server"
        className="p-3 bg-blue-500 w-fit rounded-md"
      >
        Add product
      </Link>
    </section>
  );
}
