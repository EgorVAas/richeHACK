import * as React from "react";
import axios from "axios";
import "./styles/wine.css";
import { useSearchParams } from "react-router-dom";
import { JSON_API_WINE } from "../helpers/consts";
import { useProducts } from "../contexts/ProductsContextProvider";
import { TextField } from "@mui/material";

const API = JSON_API_WINE;

export default function MediaCard() {
  const { getProducts, products } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState(searchParams.get("q") || "");

  
  React.useEffect(() => {
    getProducts();
    console.log("$$");
  }, [searchParams]);
  
  React.useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);
  // React.useEffect(() => {
  //   getProducts()
  //   // setPage(1)
  // },[searchParams])

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
  return (
    <div className="wine_card-box" style={{ paddingTop: "6em" }}>
      <TextField
        type="text"
        sx={{ width: "300px", height: "70px" }}
        placeholder="Поиск Вина"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="wine_container">
        {products?.map((item) => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
