import * as React from "react";
import axios from "axios";
import "./styles/wine.css";
import { useSearchParams } from "react-router-dom";
import { JSON_API_WINE } from "../helpers/consts";
import { useProducts } from "../contexts/ProductsContextProvider";
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

const API = JSON_API_WINE;

export default function MediaCard() {
  const { getProducts, productsWine, fetchByParams } = useProducts();
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
        placeholder="Поиск Вина..."
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
            value="Красное, сухое"
            control={<Radio />}
            label="Красное, сухое"
          />
          <FormControlLabel
            value="Красное, сладкое"
            control={<Radio />}
            label="Красное, сладкое"
          />
          <FormControlLabel
            value="Белое, сухое"
            control={<Radio />}
            label="Белое, сухое"
          />
          <FormControlLabel
            value="Белое, сладкое"
            control={<Radio />}
            label="Белое, сладкое"
          />
        </RadioGroup>
      </div>
    </div>
  );
  // *Filter
  return (
    <>
      <div className="wine_card-box" style={{ paddingTop: "6em" }}>
        {DesignFilter}
        <div className="wine_container">
          {productsWine?.map((item) => (
            <div className="wine__photo" key={item.id}>
              <img className="img_from_cardjson" src={item.photo} />
              <div className="wine__info">
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
    </>
  );
}
