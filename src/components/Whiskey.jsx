import * as React from "react";
import axios from "axios";
import styles from "./styles/whiskey.module.css";
import { useSearchParams } from "react-router-dom";
import { JSON_API_WHISKEY } from "../helpers/consts";
import { useWhiskey } from "../contexts/WhiskeyContextProvider";
import {
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  IconButton,
} from "@mui/material";
import { useCart } from "../contexts/CartContextProvider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./media/headerMedia.css";

const API = JSON_API_WHISKEY;

export default function Whiskey() {
  const { getProducts, productsWhiskey, fetchByParams } = useWhiskey();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState(searchParams.get("q") || "");
  const { addProductToCart, checkProductInCart } = useCart();

  console.log(productsWhiskey);
  React.useEffect(() => {
    getProducts();
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
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getWine();
  }, []);

  // *Filter
  const DesignFilter = (
    <div className={styles.wiskey__filterDesignContainer}>
      <TextField
        type="text"
        div
        sx={{ width: "300px", height: "70px" }}
        placeholder="Поиск Виски..."
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
            value="Односолодовый"
            control={<Radio />}
            label="Односолодовый"
          />
          <FormControlLabel value="Бурбон" control={<Radio />} label="Бурбон" />
          <FormControlLabel
            value="Купажированный"
            control={<Radio />}
            label="Купажированный"
          />
        </RadioGroup>
      </div>
    </div>
  );
  // *Filter
  return (
    <div>
      <div className={styles.wiskey_div}></div>
      <div className={styles.wiskey_card_box} style={{ paddingTop: "6em" }}>
        {DesignFilter}
        <div className={styles.wiskey_container}>
          {productsWhiskey?.map((item) => (
            <div
              id="wiskey__photo"
              className={styles.wiskey__photo}
              key={item.id}
            >
              <img className={styles.img_from_cardjson} src={item.photo} />
              <div className={styles.wiskey__info}>
                <h6 className="wine__name">Название: {item.name}</h6>
                <h6 className="wine__title">Год: {item.year}</h6>
                <h6 className="wine__date">Страна: {item.country}</h6>
                <h6 className="wine__date">Тип: {item.type}</h6>
                <h6 className="wine__date">Сорт: {item.grapes}</h6>
                <h6 className="wine__date">Крепость: {item.strong}</h6>
                <h6 className="wine__date">Обьем: {item.volume}</h6>
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
