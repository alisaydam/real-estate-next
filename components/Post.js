import Link from "next/link";

export default function PersonComponent({ post }) {
  return (
    <li>
      <Link href="/post/[id]" as={`/post/${post.id}`}>
        <a style={{ fontSize: "25px" }}>{post.name}</a>
      </Link>
    </li>
  );
}
