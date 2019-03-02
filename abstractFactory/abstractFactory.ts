interface AbstractRepositoryFactory {
  create(): Repository;
}

interface Repository {
  get(): any;
}

export const MakeRepositoryFactory = (type: "user" | "posts") => {
  if (type === "user") {
    return new UserRepositoryFactory();
  } else if (type === "posts") {
    return new PostsRepositoryFactory();
  }

  throw new Error(`unknow repository type is given. type: ${type}`);
};

export class UserRepository implements Repository {
  get() {}
}

export class UserRepositoryFactory implements AbstractRepositoryFactory {
  create() {
    return new UserRepository();
  }
}

export class PostsRepository implements Repository {
  get() {}
}

export class PostsRepositoryFactory implements AbstractRepositoryFactory {
  create() {
    return new PostsRepository();
  }
}
