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
  },
  {
    id: 3,
    title: "Learning Javascript",
    content: "Javascript is very powerful and interesting.",
    author: "Comfort Mbah",
  },
  {
    id: 4,
    title: "Learning Modules",
    content: "Module is very powerful and interesting.",
    author: "Seun Kuti",
  },
  {
    id: 5,
    title: "Learning React",
    content: "React is very powerful and interesting.",
    author: "Sylvester Joel",
  },
  {
    id: 6,
    title: "Learning CSS",
    content: "CSS is for styling",
    author: "Ifeanyi Joel",
  },
  {
    id: 7,
    title: "Learning HTML",
    content: "HTML is hypertext mark up.",
    author: "Grace Mbah",
  },
  {
    id: 8,
    title: "Learning TailwindCSS",
    content: "TailwindCSS is commonly used for styling in REACT.",
    author: "Sylvester Nwankwo",
  },
  {
    id: 9,
    title: "Learning Python",
    content: "Python is very powerful and interesting.",
    author: "Sylvester Mbah",
  },
  {
    id: 10,
    title: "Learning Typescript",
    content: "Typescript is very powerful and interesting.",
    author: "Grace Joel",
  },
];

export const getPosts = (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const total = posts.length;
  const totalPages = Math.ceil(total / limit);

  const startIndex = (page - 1) * limit;
  const paginatedPosts = posts.slice(startIndex, startIndex + limit);

  res.json({ page, limit, total, totalPages, posts: paginatedPosts });
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

export const deletePost = (req, res) => {
  const id = Number(req.params.id);

  const index = posts.findIndex((post) => post.id === id);

  if (index === -1) {
    throw new AppError("Post not found", 404)
  }

  posts.splice(index, 1);

  res.json({ message: "Post deleted successfully"})
}