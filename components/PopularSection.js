import styles from "./styles/components.module.css";
import Section from "./Section";

export default function PopularSection() {
  return (
    <div>
      <Section name="Popular" title="Our Popular">
        <div className={styles.properties_card}>
          <picture>
            <source srcSet="/house.png" type="image/webp" />
            <img src="/house.png" alt="house" />
          </picture>
          <p className={styles.price}>3000 0000</p>
          <p className={styles.attributes}>
            &nbsp;&nbsp;&nbsp; 3 Beds&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 2
            Bath &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 1400SFT
          </p>
          <picture className={styles.location}>
            <img className="w-10" alt="placeholder" src="/location.png" />
            <a>
              <p>Antalya, Alanya, Oba ...</p>
            </a>
          </picture>
        </div>
        <div className={styles.properties_card}>
          <picture>
            <source srcSet="/house.png" type="image/webp" />
            <img src="/house.png" alt="house" />
          </picture>
          <p className={styles.price}>3000 0000</p>
          <p className={styles.attributes}>
            &nbsp;&nbsp;&nbsp; 3 Beds&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 2
            Bath &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 1400SFT
          </p>
          <picture className={styles.location}>
            <img className="w-10" alt="placeholder" src="/location.png" />
            <a>
              <p>Antalya, Alanya, Oba ...</p>
            </a>
          </picture>
        </div>
        <div className={styles.properties_card}>
          <picture>
            <source srcSet="/house.png" type="image/webp" />
            <img src="/house.png" alt="house" />
          </picture>
          <p className={styles.price}>3000 0000</p>
          <p className={styles.attributes}>
            &nbsp;&nbsp;&nbsp; 3 Beds&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 2
            Bath &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 1400SFT
          </p>
          <picture className={styles.location}>
            <img className="w-10" alt="placeholder" src="/location.png" />

            <a>
              <p>Antalya, Alanya, Oba ...</p>
            </a>
          </picture>
        </div>
      </Section>
    </div>
  );
}
