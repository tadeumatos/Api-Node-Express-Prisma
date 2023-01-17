type AuthoRequest = {
  id: number;
  name: string;
  email: string;
};

type BookRequest = {
  id: number;
  name: string;
  authorId: number;
  categoryId: number;
};

type CategoryRequest = {
  id: number;
  name: string;
};

export { AuthoRequest, BookRequest, CategoryRequest };
