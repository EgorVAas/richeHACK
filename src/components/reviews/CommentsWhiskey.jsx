import * as React from "react";
import "./../styles/wine.css";
import { useParams } from "react-router-dom";
import "./../media/headerMedia.css";
import ChatIcon from "@mui/icons-material/Chat";
import { IconButton } from "@mui/material";
import axios from "axios";
import { JSON_API_WHISKEY } from "../../helpers/consts";
import { useWhiskey } from "../../contexts/WhiskeyContextProvider";

export default function CommentsWhiskey() {
  const { getProductDetails, productDetails } = useWhiskey();
  const [comments, setComments] = React.useState("");

  const { id } = useParams();

  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${JSON_API_WHISKEY}/${newProduct.id}`, newProduct);
  };

  React.useEffect(() => {
    getProductDetails(id);
  }, []);

  React.useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);
  const [product, setProduct] = React.useState(productDetails);
  return (
    <>
      <div className="wine_card-box" style={{ paddingTop: "6em" }}>
        <div className="wine_container">
          <div className="wine__photo">
            <img className="img_from_cardjson" src={product.photo} />
            <div className="wine__info">
              <h6 className="wine__name">Название: {product.name}</h6>
              <h6 className="wine__title">Год: {product.year}</h6>
              <h6 className="wine__date">Страна: {product.country}</h6>
              <h6 className="wine__date">Тип: {product.type}</h6>
              <h6 className="wine__date">Сорт: {product.grapes}</h6>
              <h6 className="wine__date">Крепость: {product.strong}</h6>
              <h6 className="wine__date">Обьем: {product.volume}</h6>
              <h6 className="wine__date">Цена: {product.price}</h6>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  onChange={(e) => {
                    setComments(e.target.value);
                  }}
                  style={{
                    height: "6vh",
                    width: "18vw",
                    outline: "none",
                    border: "none",
                    borderRadius: "0.6em",
                    paddingLeft: "1em",
                    fontSize: "1em"
                  }}
                  type="text"
                />
                {!product.hasOwnProperty("comments") ? (
                  <IconButton
                    sx={{ width: "3vw" }}
                    onClick={() => {
                      const newObj = { ...product, comments: [] };
                      newObj.comments.push(comments);
                      saveEditedProduct(newObj);
                      setProduct(newObj);
                    }}
                  >
                    <ChatIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    sx={{ width: "3vw" }}
                    onClick={() => {
                      const newObj = { ...product };
                      newObj.comments.push(comments);
                      saveEditedProduct(newObj);
                      setProduct(newObj);
                    }}
                  >
                    <ChatIcon />
                  </IconButton>
                )}
              </div>
              <div>
                {product.hasOwnProperty("comments") ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1em",
                      paddingBottom: "1em"
                    }}
                  >
                    <h3 style={{ fontSize: "2em" }}>Коментарии: </h3>
                    {product.comments.map((elem, index) => (
                      <p
                        key={index}
                        style={{
                          height: "6vh",
                          fontSize: "1.5em",
                          border: "2px solid black",
                          fontWeight: "600"
                        }}
                      >
                        {elem}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
