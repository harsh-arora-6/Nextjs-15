import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

// components
import { SubmitButton } from "@/components/form/SubmitButton";

// helpers
import { addProduct } from "@/prisma-db";

export default function CreateProductServerPage() {
  const createProduct = async (formData) => {
    "use server";
    const title = formData.get("title");
    const description = formData.get("description");
    const price = formData.get("price");

    await addProduct({ title, description, price: +price });

    revalidatePath("/solution/products-db");
    redirect("/solution/products-db");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form action={createProduct} className="space-y-4 p-4 max-w-96">
        <label className="text-white">
          Title
          <input
            type="text"
            className="p-2 w-full text-black border rounded"
            name="title"
          />
        </label>
        <label className="text-white">
          Description
          <input
            type="text"
            className="p-2 w-full text-black border rounded"
            name="description"
          />
        </label>
        <label className="text-white">
          Price
          <input
            type="number"
            className="p-2 w-full text-black border rounded"
            name="price"
            defaultValue={0}
            min={0}
          />
        </label>
        <SubmitButton />
      </form>
    </div>
  );
}
