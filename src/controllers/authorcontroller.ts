import { Request, Response } from "express";

import AuthorServices from "../services/authorservices";

const service = new AuthorServices();

export default class AuthorController {
  async Create(request: Request, response: Response) {
    const { id, name, email } = request.body;

    const author = await service.Create({ id, name, email });

    const authorJson = JSON.stringify(author, (id, value) =>
      typeof value === "bigint" ? value.toString() : value
    );

    return response.status(201).send(authorJson);
  }

  async GetAll(request: Request, response: Response) {
    const author = await service.GetAll();

    const authorJson = JSON.stringify(author, (id, value) =>
      typeof value === "bigint" ? value.toString() : value
    );

    return response.status(200).send(authorJson);
  }

  async GetById(request: Request, response: Response) {
    const id = request.params["id"];

    const author = await service.GetById(parseInt(id));

    const authorJson = JSON.stringify(author, (id, value) =>
      typeof value === "bigint" ? value.toString() : value
    );

    return response.status(200).send(authorJson);
  }

  async Update(request: Request, response: Response) {
    const { id, name, email } = request.body;

    const author = await service.Update({ id: parseInt(id), name, email });

    const authorJson = JSON.stringify(author, (id, value) =>
      typeof value === "bigint" ? value.toString() : value
    );

    return response.status(200).send(authorJson);
  }

  async Delete(request: Request, response: Response) {
    const id = request.params["id"];

    const author = await service.Delete(parseInt(id));

    const authorJson = JSON.stringify(author, (id, value) =>
      typeof value === "bigint" ? value.toString() : value
    );

    return response.status(200).send(authorJson);
  }
}
