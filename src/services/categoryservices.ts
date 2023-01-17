import { Category } from "@prisma/client";

import { CategoryRequest } from "../models/model";
import RepositoryCategory from "../repositories/repositorycategory";

const repository = new RepositoryCategory();

export default class AuthorServices {
  async Create({ id, name }: CategoryRequest) {
    return await repository.CreateCategoy({ id, name });
  }

  async GetAll() {
    return await repository.GetAll();
  }

  async GetById(id: number) {
    return await repository.GetById(id);
  }

  async Update({ id, name }: CategoryRequest) {
    return await repository.UpdateCategory({ id, name });
  }

  async Delete(id: number) {
    return await repository.DeleteCategory(id);
  }
}
