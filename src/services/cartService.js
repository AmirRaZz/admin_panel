import http from "./httpService";

export const addToCart = (productId) => {
    return http.post("/cart/add", { productId }).then(({ data }) => data.data);
};

export const decrementFromCart = (productId) => {
    return http.post("/cart/remove", { productId }).then(({ data }) => data.data);
};
