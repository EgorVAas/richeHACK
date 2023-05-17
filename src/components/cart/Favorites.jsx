import * as React from "react";
import { useFav } from "../../contexts/FavContextProvider";
import { IconButton } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';


export default function Favorites() {
  const { getCart, cart, deleteCartProduct } = useFav();

  React.useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <div className="wine_card-box" style={{ paddingTop: "5em" }}>
        <div className="wine_container">
          {cart?.products.map((row) => (
            <div
              className="wine__photo"
              key={row.item.id}
              style={{
                justifyContent: "space-between",
              }}
            >
              <img src={row.item.photo} className="img_from_cardjson" alt="" />
              <div className="wine__info">
                <h6 className="wine__name">Название: {row.item.name}</h6>
                <h6 className="wine__title">Год: {row.item.year}</h6>
                <h6 className="wine__date">Страна: {row.item.country}</h6>
                <h6 className="wine__date">Тип: {row.item.type}</h6>
                <h6 className="wine__date">Сорт: {row.item.grapes}</h6>
                <h6 className="wine__date">Крепость: {row.item.strong}</h6>
                <h6 className="wine__date">Обьем: {row.item.volume}</h6>
                <h6 className="wine__date">Цена: {row.item.price}</h6>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "1em",
                  paddingRight: "2em",
                }}
              >
                <IconButton
                  sx={{ width: "3vw" }}
                  onClick={() => deleteCartProduct(row.item.id)}
                >
                  <StarIcon
                    color={"warning"}
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
