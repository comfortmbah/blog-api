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