import Section from "./Section";
import Link from "next/link";
import Image from "next/image";

export default function RomisTvsection() {
  return (
    <Section name="Romis TV" title="Comfort is our Top priority for you">
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
    </Section>
  );
}
