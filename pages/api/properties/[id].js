import { properties } from "../../../data";

export default function propertyHandler(req, res) {
  console.log(req.method);
  const {
    query: { id },
  } = req;

  //* Fetch req here
  const filtered = properties.filter((x) => x.id === id);

  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `Property with id: ${id} not found.` });
}
