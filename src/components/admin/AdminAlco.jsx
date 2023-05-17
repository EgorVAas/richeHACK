import { Box, Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";
import { useAdmin } from "../../contexts/AdminContextProvider";
import bgAdminAlco from "../../assets/bg-wine.jpg"

const AdminAlco = () => {
  const { productsAdmin, getProducts } = useAdmin();
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
    setPage(1)
  },[searchParams])

  // pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const count = Math.ceil(productsAdmin.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return productsAdmin.slice(begin, end);
  }
  return (
    <>
    <Grid item md={9} style={{
        backgroundImage: `url(${bgAdminAlco})`,
        height: "100vh"
    }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          paddingTop: "4rem",
          justifyContent: "space-evenly",
        }}
      >
        {currentData().map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        variant="outlined"
        color="secondary"
        style={{backgroundColor: "#AAA", width:"100%"}}
      />
      </Box>
      </Grid>
    </>
  );
};

export default AdminAlco;
