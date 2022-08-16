import Section from "./Section";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function BlogsSection() {
  const { t } = useTranslation();
  return (
    <Section href="/" name={t("home:blogs")} title={t("home:blogs_title")}>
      <Link href="/">
        <a>
          <div className="flex-col overflow-hidden w-auto rounded-tr-lg rounded-bl-lg">
            <Image
              alt="Mountains"
              src="/house.png"
              layout="intrinsic"
              width={700}
              height={475}
            />
            <div className="flex items-center">
              <p className="text-4xl pl-4 text-blue-300 ">•</p>
              <span className="text-xl pl-1 font-serif border-b-2">
                22 May 2022&#8195;&#8195;
              </span>
            </div>
            <p className="pl-6 text-3xl font-serif">
              Home Sales About Surge ? We May See a Summer Like Never Before.
            </p>
          </div>
        </a>
      </Link>
      <Link href="/">
        <a>
          <div className="flex-col overflow-hidden w-auto">
            <Image
              alt="Mountains"
              src="/house.png"
              layout="intrinsic"
              width={700}
              height={475}
            />
            <div className="flex items-center">
              <p className="text-4xl pl-4 text-blue-300 ">•</p>
              <span className="text-xl pl-1 font-serif border-b-2">
                22 May 2022&#8195;&#8195;
              </span>
            </div>
            <p className="pl-6 text-3xl font-serif">
              Home Sales About Surge ? We May See a Summer Like Never Before.
            </p>
          </div>
        </a>
      </Link>
      <Link href="/">
        <a className="hidden sm:block">
          <div className="flex-col overflow-hidden w-auto">
            <Image
              alt="Mountains"
              src="/house.png"
              layout="intrinsic"
              width={700}
              height={475}
            />
            <div className="flex items-center">
              <p className="text-4xl pl-4 text-blue-300 ">•</p>
              <span className="text-xl pl-1 font-serif border-b-2">
                22 May 2022&#8195;&#8195;
              </span>
            </div>
            <p className="pl-6 text-3xl font-serif">
              Home Sales About Surge ? We May See a Summer Like Never Before.
            </p>
          </div>
        </a>
      </Link>
      <Link href="/">
        <a className="hidden lg:block">
          <div className="flex-col overflow-hidden w-auto">
            <Image
              alt="Mountains"
              src="/house.png"
              layout="intrinsic"
              width={700}
              height={475}
            />
            <div className="flex items-center">
              <p className="text-4xl pl-4 text-blue-300 ">•</p>
              <span className="text-xl pl-1 font-serif border-b-2">
                22 May 2022&#8195;&#8195;
              </span>
            </div>
            <p className="pl-6 text-3xl font-serif">
              Home Sales About Surge ? We May See a Summer Like Never Before.
            </p>
          </div>
        </a>
      </Link>
    </Section>
  );
}
