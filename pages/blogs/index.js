import styles from "../../styles/Home.module.css";
import useSWR from "swr";
import BigBlogCard from "@components/BlogBigCard";
import SocialRow from "@components/SocialRow";
import { useContext } from "react";
import { AppContext } from "@lib/state";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { theme } = useContext(AppContext);

  const { data, error } = useSWR("../api/posts", fetcher);

  if (error) return <div>Failed to fetch</div>;
  if (!data) return <div>Loading</div>;
  return (
    <main className={styles.main}>
      <picture className={styles.video}>
        <img src="/house2.png" alt="home" />
      </picture>
      <div
        className="flex w-ful h-full justify-between mx-auto mt-8 gap-20"
        style={{ maxWidth: "120rem" }}
      >
        <div className="mt-32">
          <BigBlogCard />
          <BigBlogCard />
          <BigBlogCard />
          <BigBlogCard />
          <BigBlogCard />
          <div className="flex gap-8 justify-center">
            <p className="py-2 leading-10 text-btnGreen  font-semibold inline rounded-tl-2xl rounded-br-2xl text-4xl my-4 cursor-pointer">
              ᐸ
            </p>
            <p className="px-4 py-2 leading-10 text-txtGreen font-semibold bg-btnGreen inline rounded-tl-2xl rounded-br-2xl text-2xl my-4 cursor-pointer">
              1
            </p>
            <p className="px-4 py-2 leading-10 text-txtGreen font-semibold bg-btnGreen inline rounded-tl-2xl rounded-br-2xl text-2xl my-4 cursor-pointer">
              2
            </p>
            <p className="px-4 py-2 leading-10 text-txtGreen font-semibold bg-btnGreen inline rounded-tl-2xl rounded-br-2xl text-2xl my-4 cursor-pointer">
              3
            </p>
            <p className="px-4 py-2 leading-10 text-txtGreen font-semibold bg-btnGreen inline rounded-tl-2xl rounded-br-2xl text-2xl my-4 cursor-pointer">
              4
            </p>
            <p className="py-2 leading-10 text-btnGreen  font-semibold inline rounded-tl-2xl rounded-br-2xl text-4xl my-4 cursor-pointer">
              ᐳ
            </p>
          </div>
        </div>
        <div className="-mt-[8.5rem] xl:-mt-[6rem] border rounded-tl-5xl rounded-br-5xl min-w-[25%] shadow-allAround h-full">
          <h1 className="text-center text-4xl text-txtGreen font-semibold border-btnGreen bg-textCardBG py-8 rounded-tl-5xl">
            CONTACT
          </h1>
          <div className="flex flex-col gap-20 p-8">
            <picture className="w-8/12">
              <img
                alt="logo"
                src={theme === "dark" ? "/logo.png" : "/logo-w.png"}
              />
            </picture>
            <p className=" text-4xl font-bold">+90 553 119 19 32</p>
            <p className="  text-4xl font-bold">info@romisalanya.com</p>
            <p className=" text-2xl font-bold py-8">
              oba mahallesi eski gazıpasa caddesi oba prime iş merkezi A1-1
            </p>
            <SocialRow size="35" />
          </div>
        </div>
      </div>
    </main>
  );
}
