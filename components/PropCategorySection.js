import Section from "./Section";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function PropCategorySection() {
  const { t } = useTranslation();
  return (
    <Section
      href="/"
      name={t("home:property_categories")}
      title={t("home:categories_title")}
    >
      <Link href={""}>
        <a>
          <div className="flex-col overflow-hidden w-auto rounded-tr-lg rounded-bl-lg text-center">
            <div className="relative">
              <p className="text-5xl font-bold absolute right-0 left-0 mx-auto z-10 mt-4">
                {t("home:villa")}
              </p>
              <Image
                alt="Mountains"
                src="/villa.png"
                layout="intrinsic"
                width={250}
                height={550}
              />
              <p className="text-3xl font-medium absolute bottom-0 uppercase right-0 left-0  mx-auto z-10 mb-6">
                {t("home:more_details")} ➤
              </p>
            </div>
          </div>
        </a>
      </Link>
      <Link href={""}>
        <a>
          <div className="flex-col overflow-hidden w-auto rounded-tr-lg rounded-bl-lg text-center">
            <div className="relative">
              <p className="text-5xl font-bold absolute right-0 left-0 mx-auto z-10 mt-4">
                {t("home:apartment")}
              </p>
              <Image
                alt="Mountains"
                src="/villa.png"
                layout="intrinsic"
                width={250}
                height={550}
              />
              <p className="text-3xl font absolute bottom-0 uppercase right-0 left-0  mx-auto z-10 mb-6">
                {t("home:more_details")} ➤
              </p>
            </div>
          </div>
        </a>
      </Link>
      <Link href={""}>
        <a>
          <div className="flex-col overflow-hidden w-auto rounded-tr-lg rounded-bl-lg text-center">
            <div className="relative">
              <p className="text-5xl font-bold absolute right-0 left-0 mx-auto z-10 mt-4">
                {t("home:office")}
              </p>
              <Image
                alt="Mountains"
                src="/villa.png"
                layout="intrinsic"
                width={250}
                height={550}
              />
              <p className="text-3xl font absolute bottom-0 uppercase right-0 left-0  mx-auto z-10 mb-6">
                {t("home:more_details")} ➤
              </p>
            </div>
          </div>
        </a>
      </Link>
      <Link href={""}>
        <a className="hidden sm:block">
          <div className="flex-col overflow-hidden w-auto rounded-tr-lg rounded-bl-lg text-center">
            <div className="relative">
              <p className="text-5xl font-bold absolute right-0 left-0 mx-auto z-10 mt-4">
                {t("home:land")}
              </p>
              <Image
                alt="Mountains"
                src="/villa.png"
                layout="intrinsic"
                width={250}
                height={550}
              />
              <p className="text-3xl font absolute bottom-0 uppercase right-0 left-0  mx-auto z-10 mb-6">
                {t("home:more_details")} ➤
              </p>
            </div>
          </div>
        </a>
      </Link>
      <Link href={""}>
        <a className="hidden lg:block">
          <div className="flex-col overflow-hidden w-auto rounded-tr-lg rounded-bl-lg text-center">
            <div className="relative">
              <p className="text-5xl font-bold absolute right-0 left-0 mx-auto z-10 mt-4">
                {t("home:rentals")}
              </p>
              <Image
                alt="Mountains"
                src="/villa.png"
                layout="intrinsic"
                width={250}
                height={550}
              />
              <p className="text-3xl font absolute bottom-0 uppercase right-0 left-0  mx-auto z-10 mb-6">
                {t("home:more_details")} ➤
              </p>
            </div>
          </div>
        </a>
      </Link>
    </Section>
  );
}
