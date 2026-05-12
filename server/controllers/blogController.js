import { blogs } from "../models/blogs.js";

export function getBlogs(_req, res) {
  res.json({ blogs });
}

export function getBlogBySlug(req, res) {
  const blog = blogs.find((item) => item.slug === req.params.slug);
  if (!blog) return res.status(404).json({ message: "Blog not found." });
  res.json({ blog });
}
