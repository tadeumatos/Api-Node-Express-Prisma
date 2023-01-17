import { Author } from "@prisma/client";

import { AuthoRequest } from "../models/model";
import RepositoryAuthor from "../repositories/repositoryauthor";

const repository = new RepositoryAuthor();

export default class AuthorServices {
  async Create({ id, name, email }: AuthoRequest) {
    return await repository.CreateAuthor({ id, name, email });
  }

  async GetAll() {
    return await repository.GetAll();
  }

  async GetById(id: number) {
    return await repository.GetById(id);
  }

  async Update({ id, name, email }: AuthoRequest) {
    return await repository.UpdateAuthor({ id, name, email });
  }

  async Delete(id: number) {
    return await repository.DeleteAuthor(id);
  }
}
