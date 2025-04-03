import Products from "./Products";

// actions
import { getProducts } from "@/prisma-db";

export default async function ProductsDBPage() {
  // direct interaction with DB.
  const products = await getProducts();

  return <Products products={products} />;
}
