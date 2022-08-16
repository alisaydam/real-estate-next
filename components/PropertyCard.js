import styles from "./styles/components.module.css";
import Link from "next/link";

export default function PropertyCard({ pic }) {
  return (
    <Link href="/properties/[id]" as={`/properties/${"1"}`}>
      <a>
        <div
          className="flex w-full overflow-hidden shadow-xl"
          style={{ borderRadius: "3rem 0 3rem 0" }}
        >
          <picture
            style={{ width: "25rem" }}
            className="min-w-[15rem] sm:min-w-[25rem]"
          >
            <img
              src={pic}
              alt="house"
              className="h-full object-cover "
              style={{ height: "25rem" }}
            />
          </picture>
          <div
            className="flex flex-col p-8 flex  items-center text-center justify-between"
            style={{ maxWidth: "25rem" }}
          >
            <p className="text-4xl font-semibold">$1250,000 </p>
            <picture className={styles.location}>
              <img className="w-8" alt="placeholder" src="/location.png" />

              <p className="font-medium">Antalya, Alanya, Oba ...</p>
            </picture>
            <p className="text-lg">
              Turnkey Istanbul modern apartments for sale with 5-year 0% payment
              terms...
            </p>
            <div className="flex w-full justify-around">
              <picture>
                <img src="/bed.svg" />
                <p>5</p>
              </picture>
              <picture>
                <img src="/bathtub.svg" />
                <p>5</p>
              </picture>
              <picture>
                <img src="/area.svg" />
                <p>5</p>
              </picture>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
