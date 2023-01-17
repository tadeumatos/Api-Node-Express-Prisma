import { Author } from "@prisma/client";

import { BookRequest } from "../models/model";
import RepositoryBook from "../repositories/repositorybook";

const repository = new RepositoryBook();

export default class AuthorServices {
  async Create({ id, name, authorId, categoryId }: BookRequest) {
    return await repository.CreateBook({ id, name, authorId, categoryId });
  }

  async GetAll() {
    return await repository.GetAll();
  }

  async GetById(id: number) {
    return await repository.GetById(id);
  }

  async Update({ id, name, authorId, categoryId }: BookRequest) {
    return await repository.UpdateBook({ id, name, authorId, categoryId });
  }

  async Delete(id: number) {
    return await repository.DeleteBook(id);
  }
}
