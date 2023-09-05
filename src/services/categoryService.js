import http from "./httpService";

export const getCategories = () => {
    return http.get("/category/list").then(({ data }) => data.data);
};

export const getCategoryById = (id) => {
    return http.get(`/category/${id}`).then(({ data }) => data.data);
};

export const addNewCategory = (data) => {
    return http.post("/admin/category/add", data).then(({ data }) => data.data);
};

export const updateCategory = ({ id, data }) => {
    return http
        .patch(`/admin/category/update/${id}`, data)
        .then(({ data }) => data.data);
};

export const removeCategory = (id) => {
    return http
        .delete(`/admin/category/remove/${id}`)
        .then(({ data }) => data.data);
};
