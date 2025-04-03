"use client";

/**
 * 1. create a server function to receive data entered by user in the form and pass it to action prop of form
 * and call addProduct function (present in prisma-db.js) to add a product to db
 * 2. can we somehow show the pending state while the product is being added ?
 * 3. how can we update the UI based on response of a server function ?
 */
export default function CreateProductServerPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="space-y-4 p-4 max-w-96">
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
        <button
          type="submit"
          className="w-full text-white p-2 bg-blue-500 rounded disabled:bg-gray-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
