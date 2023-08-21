import http from "./httpService";

export const getOtp = (data) => {
    return http.post("/user/get-otp", data).then(({ data }) => data.data);
};

export const checkOtp = (data) => {
    return http.post("/user/check-otp", data).then(({ data }) => data.data);
};

export const completeProfile = (data) => {
    return http
        .post("/user/complete-profile", data)
        .then(({ data }) => data.data);
};

export const getUserProfile = () => {
    return http
        .get("/user/profile")
        .then(({ data }) => data.data);
};
