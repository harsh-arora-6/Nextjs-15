"use client";
import { useActionState } from "react";

// actions
import { createProduct } from "@/app/exercise/actions/product";

export default function ProductSubmissionPage() {
  const [state, formAction, isPending] = useActionState(
    createProduct,
    {
      errors: {},
    },
    "/exercise/product-submission"
  );

  const isErrorPresent = Object.keys(state?.errors ?? {}).length;

  return (
    <div className="flex justify-center items-center h-screen">
      {isErrorPresent ? (
        <form action={formAction} className="space-y-4 p-4 max-w-96">
          <p className="text-red-500 text-xl">
            An error occurred while adding the product.
          </p>
          <div>
            <label className="text-white">
              Title
              <input
                type="text"
                className="p-2 w-full text-black border rounded"
                name="title"
                defaultValue={state?.values?.title ?? ""}
              />
            </label>
            {state?.errors?.title ? (
              <p className="text-red-500">{state?.errors?.title}</p>
            ) : null}
          </div>
          <label className="text-white">
            Description
            <input
              type="text"
              className="p-2 w-full text-black border rounded"
              name="description"
              defaultValue={state?.values?.description ?? ""}
            />
          </label>
          <div>
            <label className="text-white">
              Price
              <input
                type="number"
                className="p-2 w-full text-black border rounded"
                name="price"
                defaultValue={state?.values?.price ?? 0}
                min={0}
              />
            </label>
            {state?.errors?.price ? (
              <p className="text-red-500">{state?.errors?.price}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full text-white p-2 bg-blue-500 rounded disabled:bg-gray-500"
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </form>
      ) : (
        <p className="text-green-500">Product added successfully!!</p>
      )}
    </div>
  );
}
