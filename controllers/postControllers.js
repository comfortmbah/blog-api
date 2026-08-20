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

export const createPost = (req, res) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    throw new AppError("Title, content and author required", 404);
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    author,
  };

  posts.push(newPost);

  res.status(201).json({ message: "Post created successfully!", newPost });
}

export const updatePost = (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    throw new AppError("Post not found", 404);
  }

  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    throw new AppError("Title, content and author are required", 400);
  }

  post.title = title;
  post.content = content;
  post.author = author;

  res.json({ message: "Post updated successfully!", post }); 
}

export const updatePostPartially = (req, res) => {
  const id = Number(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    throw new AppError("Post not found", 404);
  }

  const { title, content, author } = req.body;

  if (title !== undefined) {
    post.title = title;
  }

  if (content !== undefined) {
    post.content = content;
  }

  if (author !== undefined) {
    post.author = author;
  }

  res.json({ message: "Post updated successfully", post});
}