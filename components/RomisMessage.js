import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "../lib/state";

export default function RomisMessage() {
  const { theme } = useContext(AppContext);

  return (
    <div className="flex-col p-32 space-y-36 mt-24">
      <div className="flex justify-between space-y">
        <picture className="w-4/12 min-w-4/12">
          <img
            src={theme === "dark" ? "/logo.png" : "/logo-w.png"}
            alt="romis real estate"
          />
        </picture>

        <div className="max-w-4xl relative">
          <p className="text-8xl font-bold absolute -left-16 -top-16">“</p>
          <p className="text-8xl font-bold absolute -right-10 -bottom-24">“</p>
          <p className="text-5xl font-semibold ">
            If you talk about it, its a dream .If you envision it,its
            possible,but if you schedule itits real.Your Real Estate Wealth
            Strategist.With Romis your wealth matters,your strategy counts “
          </p>
        </div>
      </div>
      <hr className="border-solid border bg-clrText border-clrText" />
      <div className="flex justify-center space-x-8">
        <a>
          <Image src="/email.png" alt="email" width={70} height={70}></Image>
        </a>
        <a>
          <Image src="/insta.png" alt="email" width={70} height={70}></Image>
        </a>
        <a>
          <Image src="/telegram.png" alt="email" width={70} height={70}></Image>
        </a>
        <a>
          <Image src="/twitter.png" alt="email" width={70} height={70}></Image>
        </a>
        <a>
          <Image src="/whatsapp.png" alt="email" width={60} height={70}></Image>
        </a>
      </div>
    </div>
  );
}
