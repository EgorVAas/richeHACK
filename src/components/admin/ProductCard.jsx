import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useAdmin } from "../../contexts/AdminContextProvider";
import styles from "./product.module.css";
import "../styles/wine.css"
// import { useCart } from "../../contexts/CartContexProvider";

export default function ProductCard({ item }) {
  const { deleteProduct } = useAdmin();
//   const { addProductToCart, checkProductInCart } = useCart();

  const navigate = useNavigate();
  return (
    <div className={styles.wine_card_box} style={{ paddingTop: "4em", minHeight: "90vh" }}>
      <div className={styles.wine_container}>
          <div className={styles.wine__photo} key={item.id}>
            <img className={styles.img_from_cardjson} src={item.picture} />
            <div className={styles.wine__info}>
              <h6 className={styles.wine__name}>Название: {item.name}</h6>
              <h6 className={styles.wine__date}>Страна: {item.country}</h6>
              <h6 className={styles.wine__date}>Обьем: {item.volume}</h6>
              <h6 className={styles.wine__date}>Цена: {item.price}</h6>
              <div style={{height: "20px"}}>
                <button className={styles.product__btn} onClick={() => deleteProduct(item.id)}>Delete</button>
                <button className={styles.product__btn} onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
