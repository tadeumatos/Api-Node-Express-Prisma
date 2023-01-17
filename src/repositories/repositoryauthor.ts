import { Author, PrismaClient } from "@prisma/client";

import { AuthoRequest } from "../models/model";

const prisma = new PrismaClient();

export default class RepositoryAuthor {
  async CreateAuthor({ id, name, email }: AuthoRequest): Promise<Author> {
    const author = await prisma.author.create({
      data: {
        name,
        email,
      },
    });

    return author;
  }

  async UpdateAuthor({ id, name, email }: AuthoRequest): Promise<Author> {
    const author = await prisma.author.update({
      where: {
        id,
      },
      data: {
        name,
        email,
      },
    });

    return author;
  }

  async DeleteAuthor(id: number): Promise<Author> {
    const author = await prisma.author.delete({
      where: {
        id,
      },
    });

    return author;
  }

  async GetAll(): Promise<Author[]> {
    const authors = await prisma.author.findMany({
      include: { books: true },
    });

    return authors;
  }

  async GetById(id: number): Promise<Author | null> {
    const author = await prisma.author.findFirst({
      where: {
        id,
      },
      include: { books: true },
    });

    return author;
  }
}
