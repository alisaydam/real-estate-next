import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "../lib/state";

export default function SocialRow({ size }) {
  const { theme } = useContext(AppContext);

  return (
    <>
      <div className="flex justify-center space-x-8">
        <a>
          <Image
            src={theme === "dark" ? "/email.png" : "/email_w.png"}
            alt="email"
            width={size}
            height={size}
          ></Image>
        </a>
        <a>
          <Image
            src={theme === "dark" ? "/insta.png" : "/insta_w.png"}
            alt="email"
            width={size}
            height={size}
          ></Image>
        </a>
        <a>
          <Image
            src={theme === "dark" ? "/telegram.png" : "/telegram_w.png"}
            alt="email"
            width={size}
            height={size}
          ></Image>
        </a>
        <a>
          <Image
            src={theme === "dark" ? "/twitter.png" : "/twitter_w.png"}
            alt="email"
            width={size}
            height={size}
          ></Image>
        </a>
        <a>
          <Image
            src={theme === "dark" ? "/whatsapp.png" : "/whatsapp_w.png"}
            alt="email"
            width={size - 10}
            height={size}
          ></Image>
        </a>
      </div>
    </>
  );
}
