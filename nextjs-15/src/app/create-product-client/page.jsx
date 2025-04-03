"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProductPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/create-product-client/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, price, description }),
      });

      if (response.ok) {
        router.push("/products-db");
      }
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-96">
        <label className="text-white">
          Title
          <input
            type="text"
            className="p-2 w-full text-black border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="text-white">
          Description
          <input
            type="text"
            className="p-2 w-full text-black border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className="text-white">
          Price
          <input
            type="number"
            className="p-2 w-full text-black border rounded"
            onChange={(e) => setPrice(+e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="w-full text-white p-2 bg-blue-500 rounded disabled:bg-gray-500"
          disabled={isLoading}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
