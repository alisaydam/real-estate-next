import Navbar from "./Navbar";
import styles from "./styles/components.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
