import SearchProperties from "../../components/PropertySearch";
import styles from "../../styles/Home.module.css";
import PropertyCard from "../../components/PropertyCard";

export default function Properties() {
  return (
    <main className={styles.main}>
      <div className={styles.video_con}>
        <picture className={styles.video}>
          <img src="/house2.png" alt="home" />
        </picture>{" "}
        <SearchProperties />
      </div>
      <div className="grid gap-x-32 gap-y-10 grid-cols-1 md:grid-cols-2 mx-auto mt-80 md:mt-30">
        <PropertyCard pic="/house.png" />
        <PropertyCard pic="/house3.png" />
        <PropertyCard pic="/house2.png" />
        <PropertyCard pic="/house3.png" />
        <PropertyCard pic="/house3.png" />
        <PropertyCard pic="/house3.png" />
        <PropertyCard pic="/house3.png" />
        <PropertyCard pic="/house3.png" />
      </div>
      <div className="flex gap-4 justify-center">
        {/* <pre>
          <p className="p-4 bg-btnGreen inline rounded-tl-xl">&gt;</p>
        </pre> */}
        <p className="px-4 py-2 text-txtGreen font-semibold bg-btnGreen inline rounded-tl-2xl rounded-br-2xl text-2xl my-4 cursor-pointer">
          ᐸ
        </p>
        <p className="px-4 py-2 text-txtGreen font-semibold bg-btnGreen inline rounded-tl-2xl rounded-br-2xl text-2xl my-4 cursor-pointer">
          1
        </p>
        <p className="px-4 py-2 text-txtGreen font-semibold bg-btnGreen inline rounded-tl-2xl rounded-br-2xl text-2xl my-4 cursor-pointer">
          2
        </p>
        <p className="px-4 py-2 text-txtGreen font-semibold bg-btnGreen inline rounded-tl-2xl rounded-br-2xl text-2xl my-4 cursor-pointer">
          3
        </p>
        <p className="px-4 py-2 text-txtGreen font-semibold bg-btnGreen inline rounded-tl-2xl rounded-br-2xl text-2xl my-4 cursor-pointer">
          4
        </p>
        <p className="px-4 py-2 text-txtGreen font-semibold bg-btnGreen inline rounded-tl-2xl rounded-br-2xl text-2xl my-4 cursor-pointer">
          ᐳ
        </p>
      </div>
    </main>
  );
}
