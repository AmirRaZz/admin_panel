import http from "./httpService";

export const getProducts = (qs, cookies) => {
    return http
        .get(`/product/list?${qs}`, { headers: { Cookie: cookies } })
        .then(({ data }) => data.data);
    // return fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/list?${qs}`, {
    //     cache: "no-store",
    // })
    //     .then((res) => res.json())
    //     .then(({data}) => data);
};

export const getOneProductBySlug = (slug) => {
    return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
};

export const likeProduct = (id) => {
    return http.post(`/product/like/${id}`).then(({ data }) => data.data);
};
