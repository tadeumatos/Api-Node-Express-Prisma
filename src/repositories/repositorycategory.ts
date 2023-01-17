import { Category, PrismaClient } from "@prisma/client";

import { CategoryRequest } from "../models/model";

const prisma = new PrismaClient();

export default class RepositoryCategory {
  async CreateCategoy({ id, name }: CategoryRequest): Promise<Category> {
    const category = await prisma.category.create({
      data: {
        name,
      },
    });

    return category;
  }

  async UpdateCategory({ id, name }: CategoryRequest): Promise<Category> {
    const category = await prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return category;
  }

  async DeleteCategory(id: number): Promise<Category> {
    const category = await prisma.category.delete({
      where: {
        id,
      },
    });

    return category;
  }

  async GetAll(): Promise<Category[]> {
    const books = await prisma.category.findMany({
      include: { books: true },
    });

    return books;
  }

  async GetById(id: number): Promise<Category | null> {
    const book = await prisma.category.findFirst({
      where: {
        id,
      },
      include: { books: true },
    });

    return book;
  }
}
