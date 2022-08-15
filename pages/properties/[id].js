import { useRouter } from "next/router";
import useSWR from "swr";
import { useContext } from "react";
import { AppContext } from "@lib/state";
import SocialRow from "@components/SocialRow";
import styles from "../../styles/Home.module.css";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Property() {
  const { theme } = useContext(AppContext);

  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/properties/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div> Loading...</div>;

  return (
    <main className={styles.main}>
      <div className={styles.video_con + " mb-80  md:mb-40"}>
        <picture className={styles.video}>
          <img src="/house2.png" alt="home" />
        </picture>{" "}
      </div>
    </main>
  );
}
