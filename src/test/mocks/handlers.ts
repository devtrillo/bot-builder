import { rest } from "msw";

// Mock Data
export const posts = [
  {
    body: "first post body",
    id: 1,
    title: "first post title",
    userId: 1,
  },
  {
    body: "second post body",
    id: 5,
    title: "second post title",
    userId: 2,
  },
  {
    body: "third post body",
    id: 6,
    title: "third post title",
    userId: 3,
  },
];

const postsEndpoints = {
  getAll: rest.get(
    "https://jsonplaceholder.typicode.com/posts",
    (req, res, ctx) => res(ctx.status(200), ctx.json(posts))
  ),
  getOne: rest.get(
    "https://jsonplaceholder.typicode.com/posts/:id",
    (req, res, ctx) => {
      if (!req.params.id)
        return res(ctx.status(400), ctx.json({ error: "missing id" }));
      return res(
        ctx.status(200),
        ctx.json(
          posts.find((post) => post.id === parseInt(req.params.id as string))
        )
      );
    }
  ),
};

export const handlers = [...Object.values(postsEndpoints)];
