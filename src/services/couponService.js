import http from "./httpService";

export const getAllCoupons = () => {
    return http.get("/admin/coupon/list").then(({ data }) => data.data);
};

export const getOneCoupon = (id) => {
    return http.get(`/admin/coupon/${id}`).then(({ data }) => data.data);
};

export const addNewCoupon = (data) => {
    return http.post("/admin/coupon/add", data).then(({ data }) => data.data);
};

export const updateCoupon = ({ id, data }) => {
    return http
        .patch(`/admin/coupon/update/${id}`, data)
        .then(({ data }) => data.data);
};

export const deleteCoupon = (id) => {
    return http
        .delete(`/admin/coupon/remove/${id}`)
        .then(({ data }) => data.data);
};
