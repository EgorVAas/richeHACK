export function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
}

export function getCountProductsInFav() {
  const cart = JSON.parse(localStorage.getItem("fav"));
  return cart ? cart.products.length : 0;
}

export const calcSubPrice = (product) => {
  return +product.count * product.item.price;
};

export const calcTotalPrice = (products) => {
  return products.reduce((acc, curr) => {
    return (acc += curr.subPrice);
  }, 0);
};
