import * as React from "react";
import { useCart } from "../../contexts/CartContextProvider";
import { Box, Typography, TextField } from "@mui/material";
import styles from "../styles/addalco.module.css";
import { useNavigate } from "react-router";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();
  const navigate = useNavigate();
  const [mail, setMail] = React.useState("");
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [adres, setAdres] = React.useState("");
  const [phone, setPhone] = React.useState("");

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    if (!mail || !name || !surname || !adres || !phone) {
      alert("Заполните все поля для покупки!");
      return;
    }
    localStorage.removeItem("cart");
    navigate("/");
    getCart();
    alert("Ваш заказ успешно отправлен!");
  };

  return (
    <>
      <div className="wine_card-box">
        <div>
          <div
            style={{ position: "static", background: "none" }}
            className={styles.addAlco_bg}
          >
            <Box
              className={styles.addAclo_box}
              sx={{
                width: "50vw",
                padding: "10vh",
                margin: "20vh auto 0",
                borderRadius: "1em",
              }}
            >
              <Typography variant="h4">Оплата заказа</Typography>
              <Typography variant="h5">{cart?.totalPrice} ₽</Typography>
              <TextField
                sx={{ marginBottom: "10px" }}
                fullWidth
                id="outlined-basic"
                label="Почта"
                variant="outlined"
                onChange={(e) => setMail(e.target.value)}
                size="small"
              />
              <TextField
                sx={{ marginBottom: "10px" }}
                fullWidth
                id="outlined-basic"
                label="Имя"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
                size="small"
              />
              <TextField
                sx={{ marginBottom: "10px" }}
                fullWidth
                id="outlined-basic"
                label="Фамилия"
                variant="outlined"
                onChange={(e) => setSurname(e.target.value)}
                size="small"
              />
              <TextField
                sx={{ marginBottom: "10px" }}
                fullWidth
                id="outlined-basic"
                label="Адрес"
                variant="outlined"
                onChange={(e) => setAdres(e.target.value)}
                size="small"
              />
              <TextField
                sx={{ marginBottom: "10px" }}
                fullWidth
                id="outlined-basic"
                label="Номер тел."
                variant="outlined"
                onChange={(e) => setPhone(e.target.value)}
                size="small"
              />

              <button className="btn__shopCart" onClick={cartCleaner}>
                Оплатить
              </button>
            </Box>
          </div>
        </div>
        <div className="wine_container">
          {cart?.products.map((row) => (
            <div className="wine__photo" key={row.item.id} style={{
    justifyContent: "space-between",

            }}>
              <img
                src={row.item.photo}
                className="img_from_cardjson"
                alt=""
              />
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
                <h5 className="wine__title">количество:</h5>
                <input
                  type="text"
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                  value={row.count}
                  min={1}
                  style={{
                    outline: 0,
                    border: "none",
                    height: "5vh",
                    width: "8vw",
                    fontSize: "2em",
                    background: "none",
                  }}
                />
                <h4 align="right">Итого: {row.subPrice} ₽</h4>
                <button
                  onClick={() => deleteCartProduct(row.item.id)}
                  style={{
                    border: "none",
                    borderRadius: "4px",
                    padding: "0.7em 1em",
                    fontWeight: "600",
                    backgroundColor: "brown",
                    cursor: "pointer",
                  }}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
