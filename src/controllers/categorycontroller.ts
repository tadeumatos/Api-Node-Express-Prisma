import { Request, Response } from "express";

import CategoryServices from "../services/categoryservices";

const service = new CategoryServices();

export default class AuthorController {
  async Create(request: Request, response: Response) {
    const { id, name } = request.body;

    const book = await service.Create({ id, name });

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
    const { id, name, authorId } = request.body;

    const book = await service.Update({ id: parseInt(id), name });

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
