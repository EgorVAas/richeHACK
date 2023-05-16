import * as React from "react";
import axios from "axios";
import styles from "./styles/gin.module.css";
import { useSearchParams } from "react-router-dom";
import { JSON_API_GIN } from "../helpers/consts";
import { useGin } from "../contexts/GinContextProvider";
import {
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  IconButton,
} from "@mui/material";
import { useCart } from "../contexts/CartContextProvider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Footer from "./Footer";

const API = JSON_API_GIN;

export default function Gin() {
  const { getProducts, productsGin, fetchByParams } = useGin();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState(searchParams.get("q") || "");
  const { addProductToCart, checkProductInCart } = useCart();

  React.useEffect(() => {
    getProducts();
    console.log("$$");
  }, [searchParams]);

  React.useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);
  React.useEffect(() => {
    getProducts();
    // setPage(1)
  }, [searchParams]);

  const [wine, setWine] = React.useState([]);
  const getWine = async () => {
    try {
      const response = await axios.get(API);
      setWine(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getWine();
  }, []);

  // *Filter
  const DesignFilter = (
    <div className="wine__filterDesignContainer">
      <TextField
        type="text"
        sx={{ width: "300px", height: "70px" }}
        placeholder="Поиск Джин..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2>Найти по категории!</h2>
      <div className="wine__filterDesign">
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          sx={{ display: "flex", flexDirection: "row" }}
          defaultValue="all"
          name="radio-buttons-group"
          onChange={(e) => fetchByParams("type", e.target.value)}
        >
          <FormControlLabel value="all" control={<Radio />} label="Все" />
          <FormControlLabel
            value="Лондонский"
            control={<Radio />}
            label="Лондонский"
          />
          <FormControlLabel
            value="Американское"
            control={<Radio />}
            label="Американское"
          />
        </RadioGroup>
      </div>
    </div>
  );
  // *Filter
  return (
    <div>
      <div className={styles.gin_div}></div>
      <div className={styles.gin_card_box} style={{ paddingTop: "6em" }}>
        {DesignFilter}
        <div className="wine_container">
          {productsGin?.map((item) => (
            <div id="gin__photo" className={styles.gin__photo} key={item.id}>
              <img className={styles.img_from_cardjson} src={item.photo} />
              <div className="wine__info">
                <h6 className="wine__name">Название: {item.name}</h6>
                <h6 className="wine__date">Страна: {item.country}</h6>
                <h6 className="wine__date">Крепость: {item.strong}</h6>
                <h6 className="wine__date">Обьем: {item.volume}</h6>
                <h6 className="wine__date">Тип: {item.type}</h6>
                <h6 className="wine__date">Цена: {item.price}</h6>
                <IconButton
                  sx={{ width: "3vw" }}
                  onClick={() => addProductToCart(item)}
                >
                  <AddShoppingCartIcon
                    color={checkProductInCart(item.id) ? "primary" : ""}
                  />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
