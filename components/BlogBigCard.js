import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function BigBlogCard() {
  return (
    <Link href={"/"}>
      <a>
        <div className="flex flex-col shadow-xl mb-20 rounded-tl-5xl rounded-br-5xl overflow-hidden pb-8">
          <picture>
            <img src="/house.png" width={"100"} />
          </picture>
          <div className="z-10 flex flex-col gap-8 mx-auto w-8/12">
            <div
              className="h-52 flex flex-col justify-around p-6 bg-textCardBG 
          -mt-[4rem] rounded-tl-4xl rounded-br-4xl"
            >
              <h1 className="text-txtGreen text-4xl font-bold">
                Optaining Turkish Citienship
              </h1>
              <p className="text-txtGreen text-2xl font-semibold">
                By Romis Admin Posted in Citizenship and residence in Turkey On
                August 26, 2022
              </p>
            </div>
            <p className=" text-2xl font-semibold ">
              If you are thinking of immigrating to Turkey these days, you must
              have heard words like residence, Turkish passport and Turkish
              citizenship. In this post, we will fully discuss the issue of
              Turkish citizenship and share with you complete information about
              the benefits of obtaining citizenship and the difference between
              living in Turkey and Turkey.....
            </p>
            <div>
              <Button href={"/"}>Read More</Button>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
