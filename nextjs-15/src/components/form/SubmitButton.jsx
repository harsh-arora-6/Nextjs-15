"use client"; //we need to have client component since we need to show changes in UI based on user interaction

import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full text-white p-2 bg-blue-500 rounded disabled:bg-gray-500"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};
