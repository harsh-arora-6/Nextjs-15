import { notFound } from "next/navigation";

// components
import EditProductForm from "./EditProductForm";

// db action
import { getProduct } from "@/prisma-db";

export default async function EditProductPage({ params }) {
  const { id } = await params;
  const product = await getProduct(parseInt(id));

  if (!product) {
    notFound();
  }

  return <EditProductForm product={product} />;
}
