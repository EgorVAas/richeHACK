import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAdmin } from "../../contexts/AdminContextProvider";
const AddAlco = () => {
  const { addProduct } = useAdmin();
  const [product, setProduct] = useState({
    picture: "",
    name: "",
    country: "",
    volume: "",
    price: 0,
  });
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
      <Box sx={{ width: "60vw", padding: "14vh", margin: "0 auto" }}>
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
    </>
  );
};

export default AddAlco;
