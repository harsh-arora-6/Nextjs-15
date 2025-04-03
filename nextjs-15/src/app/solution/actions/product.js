"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

// helpers
import { getErrors } from "@/helpers";

// db action
import { addProduct, updateProduct } from "@/prisma-db";

export const createProduct = async (prevState, formData) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const price = formData.get("price");

  const errors = getErrors({ title, price });

  if (Object.keys(errors).length > 0) {
    return { errors, values: { title, description, price } };
  }

  await addProduct({ title, description, price: +price });

  revalidatePath("/solution/products-db");
  redirect("/solution/products-db");
};

export const editProduct = async (id, prevState, formData) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const price = formData.get("price");

  const errors = getErrors({ title, price });

  if (Object.keys(errors).length > 0) {
    return { errors, values: { title, description, price } };
  }

  await updateProduct({ id, title, description, price: +price });

  revalidatePath("/solution/products-db");
  redirect("/solution/products-db");
};
