import { notFound } from "next/navigation";

// actions
import { getProduct } from "@/prisma-db";

// components
import EditProductForm from "./EditProductForm";

export default async function EditProductPage({ params }) {
  const { id } = await params;
  const product = await getProduct(parseInt(id));

  if (!product) {
    notFound(); // when product is not found then show the not found page
  }

  return <EditProductForm product={product} />;
}
