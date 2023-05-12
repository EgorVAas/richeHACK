import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import "./styles/header.css";
import nameRiche from "../assets/RICHE-name.png";
import logoWine from "../assets/iconWine.png";
import logoGin from "../assets/LogoGin.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import logoWhiskey from "../assets/iconWhiskey.png";
import logoLiquor from "../assets/iconLiquor.png";

export default function Header() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const {handleLogout, user: {email}} = useAuth();
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <Box
      style={{ position: "fixed", width: "100vw", zIndex: "1" }}
      sx={{ flexGrow: 1 }}
    >
      <AppBar position="static" id="headerContainer">
        <Toolbar>
          <Link to='/'>
            <div variant="h6" style={{cursor: "pointer"}} sx={{ flexGrow: 1,}}>
              <img className="headerRiche" src={nameRiche} alt="" />
            </div>
          </Link>
          <Box className="headerCategory">
            <Link to='/wine'>
              <span
                className="headerWine"
              >
                  <img src={logoWine} alt="" />
                WINE
              </span>
            </Link>
            <Link to='/whiskey'>
              <span
                className="headerWine"
              >
                  <img src={logoWhiskey} alt="" />
                WHISKEY
              </span>
            </Link>
            <Link to='/liquor'>
              <span
                className="headerWine"
              >
                  <img src={logoLiquor} alt="" />
                LIQUOR
              </span>
            </Link>
            <Link to='/gin'>
              <span
                className="headerWine"
              >
                  <img src={logoGin} alt="" />
                GIN
              </span>
            </Link>
          </Box>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="black"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to='/auth'>
                  <MenuItem onClick={handleClose}>Войти/зарегестрироваться</MenuItem>
                </Link>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
