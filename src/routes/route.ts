import { Router } from "express";

import AuthorController from "../controllers/authorcontroller";
import BookController from "../controllers/bookcontroller";
import CategoryController from "../controllers/categorycontroller";

const routes = Router();

routes.post("/author", new AuthorController().Create);
routes.get("/author", new AuthorController().GetAll);
routes.get("/author/:id", new AuthorController().GetById);
routes.put("/author", new AuthorController().Update);
routes.delete("/author/:id", new AuthorController().Delete);

routes.post("/book", new BookController().Create);
routes.get("/book", new BookController().GetAll);
routes.get("/book/:id", new BookController().GetById);
routes.put("/book", new BookController().Update);
routes.delete("/book/:id", new BookController().Delete);

routes.post("/category", new CategoryController().Create);
routes.get("/category", new CategoryController().GetAll);
routes.get("/category/:id", new CategoryController().GetById);
routes.put("/category", new CategoryController().Update);
routes.delete("/category/:id", new CategoryController().Delete);

export { routes };
