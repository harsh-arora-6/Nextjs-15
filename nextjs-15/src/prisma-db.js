import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

const seedProducts = async () => {
  const count = await prismaClient.product.count();

  if (count == 0) {
    await prismaClient.product.createMany({
      data: [
        { title: "Title 1", description: "Description 1", price: 100 },
        { title: "Title 2", description: "Description 2", price: 200 },
        { title: "Title 3", description: "Description 3", price: 300 },
      ],
    });
  }
};

seedProducts();

export const getProducts = async () => {
  await new Promise((res) => setTimeout(res, 1000));

  return await prismaClient.product.findMany();
};

export const getProduct = async (id) => {
  await new Promise((res) => setTimeout(res, 1000));

  return await prismaClient.product.findUnique({
    where: {
      id,
    },
  });
};

export const addProduct = async ({ title, description, price }) => {
  await new Promise((res) => setTimeout(res, 1000));

  return prismaClient.product.create({
    data: {
      title,
      description,
      price,
    },
  });
};

export const updateProduct = async ({ id, title, description, price }) => {
  await new Promise((res) => setTimeout(res, 1000));

  return prismaClient.product.update({
    where: { id },
    data: { title, description, price },
  });
};

export const deleteProduct = async (id) => {
  await new Promise((res) => setTimeout(res, 1000));

  return prismaClient.product.delete({
    where: { id },
  });
};
