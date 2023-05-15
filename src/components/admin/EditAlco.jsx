import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAdmin } from "../../contexts/AdminContextProvider";
import styles from "../styles/editaclo.module.css";

const EditAlco = () => {
  const { saveEditedProduct, getProductDetails, productDetails } = useAdmin();
  console.log(productDetails);

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const [product, setProduct] = useState(productDetails);
  console.log(product);
  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <>
      <div>
        <div className={styles.editAlco_bg}>
          <Box
            className={styles.editAclo_box}
            sx={{
              width: "60vw",
              margin: "0 auto",
              padding: "7em 10vh",
              marginTop: "8em",
              borderRadius: "1em",
            }}
          >
            <Typography variant="h4">EDIT PRODUCT</Typography>
            <TextField
              sx={{ marginBottom: "10px" }}
              fullWidth
              id="outlined-basic"
              label="picture"
              variant="outlined"
              size="small"
              name="picture"
              onChange={handleInp}
              value={product.picture || ""}
            />
            <TextField
              sx={{ marginBottom: "10px" }}
              fullWidth
              id="outlined-basic"
              label="name"
              variant="outlined"
              size="small"
              name="name"
              onChange={handleInp}
              value={product.name || ""}
            />
            <TextField
              sx={{ marginBottom: "10px" }}
              fullWidth
              id="outlined-basic"
              label="country"
              variant="outlined"
              size="small"
              name="country"
              onChange={handleInp}
              value={product.country || ""}
            />
            <TextField
              sx={{ marginBottom: "10px" }}
              fullWidth
              id="outlined-basic"
              label="volume"
              variant="outlined"
              size="small"
              name="volume"
              onChange={handleInp}
              value={product.volume || ""}
            />
            <TextField
              sx={{ marginBottom: "10px" }}
              fullWidth
              id="outlined-basic"
              label="price"
              variant="outlined"
              size="small"
              name="price"
              onChange={handleInp}
              value={product.price || ""}
            />
            <Button
              onClick={() => saveEditedProduct(product)}
              fullWidth
              variant="outlined"
            >
              Save Changes
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default EditAlco;
