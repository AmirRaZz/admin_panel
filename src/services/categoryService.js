import http from "./httpService";

export const getCategories = () => {
    return http.get("/category/list").then(({ data }) => data.data);
};
