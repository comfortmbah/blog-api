import { AppError } from "../utils/AppError.js";


export const posts = [
  {
    id: 1,
    title: "Learning Node.js",
    content: "Node.Js is very powerful and interesting.",
    author: "Sylvester Mbah",
  },
  {
    id: 2,
    title: "Learning Express",
    content: "Express made Node.Js very interesting and easy.",
    author: "Ifeanyi Mbah",
  }
];

export const getPosts = (req, res) => {
  res.json(posts);
}

export const getPost = (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    throw new AppError("Post Not Found", 404);
  }

  res.json(post);
}