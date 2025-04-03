"use client";
import { useActionState } from "react";

// components
import { SubmitButton } from "@/components/form/SubmitButton";

// server actions
import { createProduct } from "@/app/exercise/actions/product";

export default function EditProductPage() {
  // fetch product and prefill form with its data
  const product = { title: "Title", description: "Description", price: 200 };

  const [state, formAction] = useActionState(createProduct, {
    errors: {},
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <form action={formAction} className="space-y-4 p-4 max-w-96">
        <div>
          <label className="text-white">
            Title
            <input
              type="text"
              className="p-2 w-full text-black border rounded"
              name="title"
              defaultValue={product?.title ?? ""}
            />
          </label>
          {state.errors.title ? (
            <p className="text-red-500">{state.errors.title}</p>
          ) : null}
        </div>
        <label className="text-white">
          Description
          <input
            type="text"
            className="p-2 w-full text-black border rounded"
            name="description"
            defaultValue={product?.title ?? ""}
          />
        </label>
        <div>
          <label className="text-white">
            Price
            <input
              type="number"
              className="p-2 w-full text-black border rounded"
              name="price"
              defaultValue={product?.price ?? 0}
              min={0}
            />
          </label>
          {state.errors.price ? (
            <p className="text-red-500">{state.errors.price}</p>
          ) : null}
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}
