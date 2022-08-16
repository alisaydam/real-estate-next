import Section from "./Section";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function RomisTvsection() {
  const { t } = useTranslation();
  return (
    <Section href="/" name={t("home:romis_tv")} title={t("home:tv_title")}>
      <Link href="/">
        <a>
          <div className="flex-col overflow-hidden w-auto rounded-tl-lg rounded-br-lg">
            <Image
              alt="Mountains"
              src="/house.png"
              layout="intrinsic"
              width={700}
              height={475}
            />
          </div>
        </a>
      </Link>
      <Link href="/">
        <a>
          <div className="flex-col overflow-hidden w-auto rounded-tl-lg rounded-br-lg">
            <Image
              alt="Mountains"
              src="/house.png"
              layout="intrinsic"
              width={700}
              height={475}
            />
          </div>
        </a>
      </Link>
      <Link href="/">
        <a className="hidden sm:block">
          <div className="flex-col overflow-hidden w-auto rounded-tl-lg rounded-br-lg">
            <Image
              alt="Mountains"
              src="/house.png"
              layout="intrinsic"
              width={700}
              height={475}
            />
          </div>
        </a>
      </Link>
      <Link href="/">
        <a className="hidden lg:block">
          <div className="flex-col overflow-hidden w-auto rounded-tl-lg rounded-br-lg">
            <Image
              alt="Mountains"
              src="/house.png"
              layout="intrinsic"
              width={700}
              height={475}
            />
          </div>
        </a>
      </Link>
    </Section>
  );
}
