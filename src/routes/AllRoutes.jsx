import React from "react";
import Main from "../components/Main";
import Wine from "../components/Wine";
import Whiskey from "../components/Whiskey";
import Gin from "../components/Gin";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Auth from "../components/auth/Auth";
import Liquor from "../components/Liquor";
import AddAlco from "../components/admin/AddAlco";
import EditAlco from "../components/admin/EditAlco";
import { useAuth } from "../contexts/AuthContextProvider";
import { ADMIN } from "../helpers/consts";
import AdminAlco from "../components/admin/AdminAlco";
import Cart from "../components/cart/Cart";
import Favorites from "../components/cart/Favorites";
import Comments from "../components/reviews/Comments";
import CommentsWhiskey from "../components/reviews/CommentsWhiskey";
import CommentsLiquor from "../components/reviews/CommentsLiquor";
import CommentsGin from "../components/reviews/CommentsGin";

const AllRoutes = () => {
  const { user } = useAuth();
  const PAGES_ROUTES = [
    { link: "/", element: <Main />, id: 1 },
    { link: "/wine", element: <Wine />, id: 2 },
    { link: "/whiskey", element: <Whiskey />, id: 3 },
    { link: "/liquor", element: <Liquor />, id: 4 },
    { link: "/gin", element: <Gin />, id: 5 },
    { link: "/auth", element: <Auth />, id: 6 },
    { link: "*", element: <NotFoundPage />, id: 7 },
    { link: "/cart", element: <Cart />, id: 8 },
    { link: "/fav", element: <Favorites />, id: 9 },
    { link: "/comments/:id", element: <Comments />, id: 10 },
    { link: "/comments-w/:id", element: <CommentsWhiskey />, id: 11 },
    { link: "/comments-l/:id", element: <CommentsLiquor />, id: 12 },
    { link: "/comments-g/:id", element: <CommentsGin />, id: 13 },
  ];

  const ADMIN_PAGES = [
    { link: "/admin-alco", element: <AdminAlco />, id: 8 },
    { link: "/add-alco", element: <AddAlco />, id: 9 },
    { link: "/edit/:id", element: <EditAlco />, id: 10 },
  ];
  return (
    <>
      <Routes>
        {PAGES_ROUTES.map((elem) => (
          <Route path={elem.link} key={elem.id} element={elem.element} />
        ))}

        {user
          ? ADMIN_PAGES.map((elem) => (
              <Route
                path={elem.link}
                key={elem.id}
                element={
                  user.email === ADMIN ? (
                    elem.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default AllRoutes;
