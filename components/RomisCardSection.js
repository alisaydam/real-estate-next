import Section from "./Section";
import Button from "./Button";
import styles from "./styles/components.module.css";
import Link from "next/link";
import Image from "next/image";

export default function RomisCardSection() {
  return (
    <div className={styles.section_con}>
      <div
        className={styles.section_header + " flex-row-reverse mb-4"}
        style={{ alignItems: "flex-start" }}
      >
        <div className={styles.slogan + " max-w-4xl font-semibold"}>
          <p className={styles.sec_name}>Romis Card</p>
          <h1 className={styles.sec_title}>Out Vip Card</h1>
          <p className="text-3xl mt-8 leading-12">
            If you talk about it, its a dream .If you envision it,its
            possible,but if you schedule it,its real.Your Real Estate Wealth
            Strategist
          </p>
          <div className="flex items-center mt-4">
            <p className="text-6xl pl-4 text-green-300 ">•</p>
            <span className="text-2xl pl-4">Free Flowers &#8195;&#8195;</span>
            <p className="text-6xl pl-4 text-green-300 ">•</p>
            <span className="text-2xl pl-4">Free Flowers &#8195;&#8195;</span>
          </div>
          <div className="flex items-center ">
            <p className="text-6xl pl-4 text-green-300 ">•</p>
            <span className="text-2xl pl-4">Free Flowers &#8195;&#8195;</span>
            <p className="text-6xl pl-4 text-green-300 ">•</p>
            <span className="text-2xl pl-4">Free Flowers &#8195;&#8195;</span>
          </div>
        </div>
        <div className="shrink-0">
          <Link href="/">
            <a>
              <Image alt="Mountains" src="/rect.png" width={250} height={250} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
