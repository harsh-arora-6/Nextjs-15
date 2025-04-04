import Link from "next/link";

// actions
import { getProducts } from "@/prisma-db";
import { removeProduct } from "@/app/solution/actions/product";

export default async function ProductsDBPage() {
  // fetch products from db directly here
  const products = await getProducts();

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
              href={`/solution/products-db/${product.id}`}
              className="text-xl font-semibold"
            >
              {product.title}
            </Link>
            <p>{product.description}</p>
            <p className="text-lg font-medium">${product.price}</p>
            <form action={removeProduct.bind(null, product.id)}>
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
