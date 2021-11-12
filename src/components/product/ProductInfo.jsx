import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import http from "../../Services/httpServices";
import styles from "./style.module.css";
import product1 from "../../assets/images/product1.png";

function ProductInfo({ match }) {
  const { params } = match;
  const [product, setproduct] = useState(null);

  useEffect(async () => {
    const { data } = await http.get(`/allproducts/${params.id}`);
    setproduct(data);
  }, []);
  function renderComponent(product) {
    return (
      <div className={styles.gridcontainer}>
        <div className={`${styles.item} ${styles.imagecontainer}`}>
          <img src={product1} className={styles.productimage} />
        </div>
        <div className={`${styles.item} ${styles.info}`}>
          <div className={styles.itemcontainer}>
            <h1>{product.title}</h1>
            <div className={styles.underline}></div>
            <ul className={styles.proplist}>
              <h2>ویژگی های محصول</h2>
              {product.properties.map((prop) => (
                <li>
                  <h3>{prop}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`${styles.item} ${styles.sellinfo}`}>
          <div className={`${styles.itemcontainer}`}>
              <h6 className={styles.subtitle}>فروشنده</h6>
            <div>
              <h6>آرسسیل</h6>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div>
                  <h6 style={{ color: "#311b92", margin: "5px" }}>66%</h6>
                  <h6>رضایت مشتریان</h6>
                </div>
                <div>
                  <h6>عملکرد</h6>
                  <h6 style={{ color: "#4caf50", margin: "5px" }}>عالی</h6>
                </div>
              </div>
            </div>
            <div className={styles.underline}></div>
            <div>
              <div>
                <h6 style={{ opacity: ".7" }}>
                  گارانتی اصالت و سلامت فیزیکی کالا
                </h6>
              </div>
            </div>
            <div className={styles.underline}></div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6 className={styles.subtitle}>قیمت فروشنده</h6>
                <div className={styles.pricecontainer}>
                  <h6
                    className={styles.h6}
                    style={
                      !(product.discount === "" || product.discount === null)
                        ? { textDecoration: "line-through" }
                        : null
                    }
                  >
                    {product.price} تومان
                  </h6>
                  {!(product.discount === "" || product.discount === null) ? (
                    <span className={styles.discountcontainer}>
                      {product.discount}%
                    </span>
                  ) : null}
                </div>
              </div>
              <div>
                {!(product.discount === "" || product.discount === null) ? (
                  <h6 className={styles.finalprice}>
                    {product.price - (product.price * product.discount) / 100}{" "}
                    تومان
                  </h6>
                ) : null}
              </div>
            </div>
            <button className={styles.buybtn}>افزودن به سبد خرید</button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section
      className={styles.productinfocontainer}
      style={{ textAlign: "center", direction: "rtl" }}
    >
      {!product ? (
        <div style={{ margin: "20px" }}>
          <ClipLoader color="#68E1FD" size={50} margin={2} />
        </div>
      ) : (
        renderComponent(product)
      )}
    </section>
  );
}

export default ProductInfo;
