import { posts } from "../../../data";

export default function postHandler(req, res) {
  //   const { query } = req;
  const {
    query: { id },
  } = req;

  const filtered = posts.filter((p) => p.id === id);

  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `Post with id: ${id} not found.` });
}
