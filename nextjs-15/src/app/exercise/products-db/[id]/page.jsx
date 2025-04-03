import { notFound } from "next/navigation";

// actions
import { getProduct } from "@/prisma-db";

/**
 * Here we need to display form with prefilled values for a product
 * 1. How can we fetch a particular product ? Do we have access to its id ?
 * 2. Can we create editProduct server function similar to createProduct function ?
 * 3. For editing we would need to pass id of product to server function. Is there some way to do that ?
 */
export default async function EditProductPage() {
  const product = {
    id: 1,
    title: "Title 1",
    description: "description 1",
    price: 100,
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="space-y-4 p-4 max-w-96">
        <label className="text-white">
          Title
          <input
            type="text"
            className="p-2 w-full text-black border rounded"
            name="title"
            defaultValue={product?.title}
          />
        </label>
        <label className="text-white">
          Description
          <input
            type="text"
            className="p-2 w-full text-black border rounded"
            name="description"
            defaultValue={product?.description ?? ""}
          />
        </label>
        <label className="text-white">
          Price
          <input
            type="number"
            className="p-2 w-full text-black border rounded"
            name="price"
            defaultValue={product?.price}
            min={0}
          />
        </label>
        <button className="w-full text-white p-2 bg-blue-500 rounded disabled:bg-gray-500">
          Submit
        </button>
      </form>
    </div>
  );
}
