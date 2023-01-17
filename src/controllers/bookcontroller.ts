import { Request, Response } from "express";

import BookServices from "../services/bookservices";

const service = new BookServices();

export default class AuthorController {
  async Create(request: Request, response: Response) {
    const { id, name, authorId, categoryId } = request.body;

    const book = await service.Create({ id, name, authorId, categoryId });

    const bookJson = JSON.stringify(book, (id, value) =>
      typeof value === "bigint" ? value.toString() : value
    );

    return response.status(201).send(bookJson);
  }

  async GetAll(request: Request, response: Response) {
    const book = await service.GetAll();

    const bookJson = JSON.stringify(book, (id, value) =>
      typeof value === "bigint" ? value.toString() : value
    );

    return response.status(200).send(bookJson);
  }

  async GetById(request: Request, response: Response) {
    const id = request.params["id"];

    const book = await service.GetById(parseInt(id));

    const bookJson = JSON.stringify(book, (id, value) =>
      typeof value === "bigint" ? value.toString() : value
    );

    return response.status(200).send(bookJson);
  }

  async Update(request: Request, response: Response) {
    const { id, name, authorId, categoryId } = request.body;

    const book = await service.Update({
      id: parseInt(id),
      name,
      authorId,
      categoryId,
    });

    const bookJson = JSON.stringify(book, (id, value) =>
      typeof value === "bigint" ? value.toString() : value
    );

    return response.status(200).send(bookJson);
  }

  async Delete(request: Request, response: Response) {
    const id = request.params["id"];

    const book = await service.Delete(parseInt(id));

    const bookJson = JSON.stringify(book, (id, value) =>
      typeof value === "bigint" ? value.toString() : value
    );

    return response.status(200).send(bookJson);
  }
}
