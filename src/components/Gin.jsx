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
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LiquorIcon from "@mui/icons-material/Liquor";
import AddCardIcon from "@mui/icons-material/AddCard";
import RicheLogo from "../assets/RICHE logo.png";
import { useFav } from "../contexts/FavContextProvider";
import StarIcon from "@mui/icons-material/Star";

const API = JSON_API_GIN;

export default function Gin() {
  const { getProducts, productsGin, fetchByParams } = useGin();
  const { addProductToFav, checkProductInFav } = useFav();
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
                <div style={{ display: "flex" }}>
                  <IconButton
                    sx={{ width: "3vw" }}
                    onClick={() => addProductToCart(item)}
                  >
                    <AddShoppingCartIcon
                      color={checkProductInCart(item.id) ? "primary" : ""}
                    />
                  </IconButton>
                  <IconButton
                    sx={{ width: "3vw" }}
                    onClick={() => addProductToFav(item)}
                  >
                    <StarIcon
                      color={checkProductInFav(item.id) ? "warning" : ""}
                    />
                  </IconButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "rgb(249, 214, 165)",
          paddingTop: "1em",
          paddingBottom: "1em",
          marginTop: "1em",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            borderBottom: "2 px solid black",
          }}
        >
          <img
            style={{ width: "10vw", height: "15vh", marginTop: "4em" }}
            src={RicheLogo}
            alt=""
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.045645779053!2d74.58507277539424!3d42.87188070261396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec826a9279199%3A0xa864dba98b387b9f!2z0J3Rg9Cy0L7RgNC40Yg!5e0!3m2!1sru!2skg!4v1684230806207!5m2!1sru!2skg"
            width="800"
            height="250"
            style={{ border: "0", borderRadius: "1em", marginTop: "1em" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3em",
              width: "15vw",
              flexWrap: "wrap",
            }}
          >
            <AirportShuttleIcon sx={{ cursor: "pointer" }} />
            <CallIcon sx={{ cursor: "pointer" }} />
            <InstagramIcon sx={{ cursor: "pointer" }} />
            <FacebookIcon sx={{ cursor: "pointer" }} />
            <TwitterIcon sx={{ cursor: "pointer" }} />
            <ShoppingCartIcon sx={{ cursor: "pointer" }} />
            <LiquorIcon sx={{ cursor: "pointer" }} />
            <AddCardIcon sx={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
