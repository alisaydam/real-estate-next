import Post from "../../components/Post";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("../api/posts", fetcher);

  if (error) return <div>Failed to fetch</div>;
  if (!data) return <div>Loading</div>;

  return (
    <>
      <ul>
        {data.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </ul>
    </>
  );
}
