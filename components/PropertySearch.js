import styles from "./styles/components.module.css";
import React from "react";

export default function SearchProperties() {
  
  const [formData, setFormData] = React.useState({
    region: "",
    propertyType: "",
    maxPrice: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <div className={styles.search_con}>
        <form action="#" onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.select_con}>
            <label className={styles.label} htmlFor="lang">
              Region
            </label>
            <select
              className={styles.select_form}
              name="region"
              id="lang"
              onChange={handleChange}
            >
              <option value="alanya">Alanya</option>
              <option value="antalya">Antalya</option>
              <option value="istanbul">Istanbuk</option>
              <option value="mersin">Mersin</option>
            </select>
          </div>
          <hr
            style={{
              border: "1px solid #8AFFB2",
              background: "#8AFFB2",
              height: "100%",
            }}
          />
          <div className={styles.select_con}>
            <label className={styles.label} htmlFor="lang">
              Property Type
            </label>
            <select
              className={styles.select_form}
              name="propertyType"
              id="lang"
              onChange={handleChange}
            >
              <option value="villa">Villa</option>
              <option value="apertment">Apertment</option>
              <option value="flat">Flat</option>
            </select>
          </div>
          <hr
            style={{
              border: "1px solid #8AFFB2",
              background: "#8AFFB2",
              height: "100%",
            }}
          />
          <div className={styles.select_con}>
            <label className={styles.label} htmlFor="lang">
              Price Range
            </label>
            <select
              className={styles.select_form}
              name="Price Range"
              id="lang"
              onChange={handleChange}
            >
              <option value="30-50">30.000€ - 50.000€</option>
              <option value="50-75">50.000€ - 75.000€</option>
              <option value="75-100">75.000€ - 100.000€</option>
              <option value="100-150">100.000€ - 150.000€</option>
              <option value="150-300">150.000€ - 300.000€</option>
              <option value="300-1500">300.000€ - ...€</option>
            </select>
          </div>
          <hr
            style={{
              border: "1px solid #8AFFB2",
              background: "#8AFFB2",
              height: "100%",
            }}
          />{" "}
          <div className={styles.select_con}>
            <label className={styles.label} htmlFor="lang">
              Bedrooms
            </label>
            <select
              className={styles.select_form}
              name="Price Range"
              id="lang"
              onChange={handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 and more</option>
            </select>
          </div>
          <div className={styles.select_con}>
            <input className={styles.search_btn} type="submit" value="Search" />
          </div>
        </form>
      </div>
    </div>
  );
}
