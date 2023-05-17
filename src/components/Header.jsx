import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import "./styles/header.css";
import "./media/headerMedia.css";
import nameRiche from "../assets/RICHE-name.png";
import logoWine from "../assets/iconWine.png";
import logoGin from "../assets/LogoGin.png";
import { Link, useNavigate} from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import logoWhiskey from "../assets/iconWhiskey.png";
import logoLiquor from "../assets/iconLiquor.png";
import { MenuList } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";


export default function Header() {
  const [auth, setAuth] = React.useState(true);

  const {
    handleLogout,
    user: { email },
  } = useAuth();
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // ! menu admin open
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [count, setCount] = React.useState()
  // const {addProductToCart} = useCart()

  // React.useEffect(() => {
  //   setCount(getCountProductsInCart())
  // },[addProductToCart])

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {email ? (
        <MenuList>
          <MenuItem>{email}</MenuItem>
          <MenuItem
            onClick={() => {
              handleLogout();
              handleMenuClose();
            }}
          >
            Выйти
          </MenuItem>
          <Link to='/add-alco'>
            <MenuItem>Добавить алкоголь!</MenuItem>
          </Link>
          <Link to='/admin-alco'>
            <MenuItem>Мои напитки!</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>Корзина</MenuItem>
          </Link>
          <Link to="/fav">
            <MenuItem>Избранное</MenuItem>
          </Link>
        </MenuList>
      ) : (
        <MenuList>
          <MenuItem onClick={() => navigate("/auth")}>Войти</MenuItem>
          <Link to="/cart">
            <MenuItem>Корзина</MenuItem>
          </Link>
          <Link to="/fav">
            <MenuItem>Избранное</MenuItem>
          </Link>
        </MenuList>
      )}
    </Menu>
  )

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <ShoppingCartIcon size="large" color="black">
          <Badge>
            <ShoppingCartIcon />
          </Badge>
        </ShoppingCartIcon>

        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <FavoriteBorderIcon
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <FavoriteBorderIcon />
          </Badge>
        </FavoriteBorderIcon>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <PersonRemoveIcon
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <PersonRemoveIcon />
        </PersonRemoveIcon>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box
      style={{ position: "fixed", width: "100vw", zIndex: "1" }}
      sx={{ flexGrow: 1 }}
    >
      <AppBar position="static" id="headerContainer">
        <Toolbar>
          <Link to="/">
            <div
              variant="h6"
              style={{ cursor: "pointer" }}
              sx={{ flexGrow: 1 }}
            >
              <img className="headerRiche" src={nameRiche} alt="" />
            </div>
          </Link>
          <Box className="headerCategory">
            <Link to="/wine">
              <span className="headerWine">
                <img className="logoAlco" src={logoWine} alt="" />
                WINE
              </span>
            </Link>
            <Link to="/whiskey">
              <span className="headerWine">
                <img className="logoAlco" src={logoWhiskey} alt="" />
                WHISKEY
              </span>
            </Link>
            <Link to="/liquor">
              <span className="headerWine">
                <img className="logoAlco" src={logoLiquor} alt="" />
                LIQUOR
              </span>
            </Link>
            <Link to="/gin">
              <span className="headerWine">
                <img className="logoAlco" src={logoGin} alt="" />
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
            </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
