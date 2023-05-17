import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAdmin } from "../../contexts/AdminContextProvider";
import styles from "../styles/addalco.module.css";
const AddAlco = () => {
  const { addProduct } = useAdmin();
  const [product, setProduct] = useState({
    picture: "",
    name: "",
    country: "",
    volume: "",
    price: 0,
  });
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
        <div className={styles.addAlco_bg}>
          <Box
            className={styles.addAclo_box}
            sx={{
              width: "50vw",
              padding: "10vh",
              margin: "20vh auto 0",
              borderRadius: "1em",
            }}
          >
            <Typography variant="h4">ADMIN PANEL</Typography>
            <TextField
              sx={{ marginBottom: "10px" }}
              fullWidth
              id="outlined-basic"
              label="picture"
              variant="outlined"
              size="small"
              name="picture"
              onChange={handleInp}
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
            />
            <Button
              onClick={() => addProduct(product)}
              fullWidth
              variant="outlined"
            >
              Add Product
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default AddAlco;
