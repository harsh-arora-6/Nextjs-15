// components
import ProductsList from "./ProductsList";

// actions
import { getProducts } from "@/prisma-db";

export default async function ProductsDBPage() {
  // fetch products from db directly here
  const products = await getProducts();

  return <ProductsList products={products} />;
}
