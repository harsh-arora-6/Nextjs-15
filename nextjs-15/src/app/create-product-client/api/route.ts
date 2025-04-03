import { addProduct } from "@/prisma-db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { title, price, description } = await req.json();
  try {
    const product = await addProduct({ title, description, price });

    return new NextResponse(JSON.stringify(product), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
};
