import Section from "./Section";
import Link from "next/link";
import Image from "next/image";

export default function PropCategorySection() {
  return (
    <Section name="Properties Categories" title="Explore Out Properties">
      <Link href={""}>
        <a>
          <div className="flex-col overflow-hidden w-auto rounded-tr-lg rounded-bl-lg text-center">
            <div className="relative">
              <p className="text-5xl font-bold absolute right-0 left-0 mx-auto z-10 mt-4">
                Villa
              </p>
              <Image
                alt="Mountains"
                src="/villa.png"
                layout="intrinsic"
                width={250}
                height={550}
              />
              <p className="text-3xl font absolute bottom-0 right-0 left-0  mx-auto z-10 mb-6">
                More Details ➤
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
                Villa
              </p>
              <Image
                alt="Mountains"
                src="/villa.png"
                layout="intrinsic"
                width={250}
                height={550}
              />
              <p className="text-3xl font absolute bottom-0 right-0 left-0  mx-auto z-10 mb-6">
                More Details ➤
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
                Villa
              </p>
              <Image
                alt="Mountains"
                src="/villa.png"
                layout="intrinsic"
                width={250}
                height={550}
              />
              <p className="text-3xl font absolute bottom-0 right-0 left-0  mx-auto z-10 mb-6">
                More Details ➤
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
                Villa
              </p>
              <Image
                alt="Mountains"
                src="/villa.png"
                layout="intrinsic"
                width={250}
                height={550}
              />
              <p className="text-3xl font absolute bottom-0 right-0 left-0  mx-auto z-10 mb-6">
                More Details ➤
              </p>
            </div>
          </div>
        </a>
      </Link>
    </Section>
  );
}
