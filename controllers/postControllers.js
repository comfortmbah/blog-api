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
    res.status(404).json({ message: "Post Not Found"})
  }

  res.json(post);
}