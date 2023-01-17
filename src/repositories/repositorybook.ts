import { Book, PrismaClient } from "@prisma/client";

import { BookRequest } from "../models/model";

const prisma = new PrismaClient();

export default class RepositoryBook {
  async CreateBook({
    id,
    name,
    authorId,
    categoryId,
  }: BookRequest): Promise<Book> {
    const book = await prisma.book.create({
      data: {
        name,
        authorId,
        categoryId,
      },
    });

    return book;
  }

  async UpdateBook({
    id,
    name,
    authorId,
    categoryId,
  }: BookRequest): Promise<Book> {
    const book = await prisma.book.update({
      where: {
        id,
      },
      data: {
        name,
        authorId,
        categoryId,
      },
    });

    return book;
  }

  async DeleteBook(id: number): Promise<Book> {
    const book = await prisma.book.delete({
      where: {
        id,
      },
    });

    return book;
  }

  async GetAll(): Promise<Book[]> {
    const books = await prisma.book.findMany({
      include: { category: true },
    });

    return books;
  }

  async GetById(id: number): Promise<Book | null> {
    const book = await prisma.book.findFirst({
      where: {
        id,
      },
      include: { category: true },
    });

    return book;
  }
}
