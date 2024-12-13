
import styles from "./page.module.css";
import Content from "../components/content/content";
import ProductList from "@/components/product/Product";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Content />
      <ProductList/>
      <Footer/>
    </div>
  );
}
