import styles from "./styles/components.module.css";
import Section from "./Section";
import Link from "next/link";

export default function PopularSection() {
  return (
    <div className="md:pt-20">
      <Section href="/" name="Popular" title="Our Popular">
        <Link href="#">
          <a>
            <div className={styles.properties_card}>
              <picture>
                <source srcSet="/house.png" type="image/webp" />
                <img src="/house.png" alt="house" />
              </picture>
              <p className={styles.price}>$3000 0000</p>
              <p className={styles.attributes}>
                3 BEDS &nbsp; |&nbsp; 2 BATH &nbsp;|&nbsp; 1400SFT
              </p>
              <picture className={styles.location}>
                <img className="w-6" alt="placeholder" src="/location.png" />

                <p>&nbsp;&nbsp;Antalya, Alanya, Oba ...</p>
              </picture>
            </div>
          </a>
        </Link>
        <Link href="#">
          <a>
            <div className={styles.properties_card}>
              <picture>
                <source srcSet="/house.png" type="image/webp" />
                <img src="/house.png" alt="house" />
              </picture>
              <p className={styles.price}>$3000 0000</p>
              <p className={styles.attributes}>
                3 BEDS &nbsp; |&nbsp; 2 BATH &nbsp;|&nbsp; 1400SFT
              </p>
              <picture className={styles.location}>
                <img className="w-6" alt="placeholder" src="/location.png" />

                <p>&nbsp;&nbsp;Antalya, Alanya, Oba ...</p>
              </picture>
            </div>
          </a>
        </Link>
        <Link href="#">
          <a className="hidden sm:block">
            <div className={styles.properties_card}>
              <picture>
                <source srcSet="/house.png" type="image/webp" />
                <img src="/house.png" alt="house" />
              </picture>
              <p className={styles.price}>$3000 0000</p>
              <p className={styles.attributes}>
                3 BEDS &nbsp; |&nbsp; 2 BATH &nbsp;|&nbsp; 1400SFT
              </p>
              <picture className={styles.location}>
                <img className="w-6" alt="placeholder" src="/location.png" />

                <p>&nbsp;&nbsp;Antalya, Alanya, Oba ...</p>
              </picture>
            </div>
          </a>
        </Link>
        <Link href="#">
          <a className="hidden  lg:block">
            <div className={styles.properties_card}>
              <picture>
                <source srcSet="/house.png" type="image/webp" />
                <img src="/house.png" alt="house" />
              </picture>
              <p className={styles.price}>$3000 0000</p>
              <p className={styles.attributes}>
                3 BEDS &nbsp; |&nbsp; 2 BATH &nbsp;|&nbsp; 1400SFT
              </p>
              <picture className={styles.location}>
                <img className="w-6" alt="placeholder" src="/location.png" />

                <p>&nbsp;&nbsp;Antalya, Alanya, Oba ...</p>
              </picture>
            </div>
          </a>
        </Link>
      </Section>
    </div>
  );
}
