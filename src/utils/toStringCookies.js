export const toStringCookies = (cookies) => {
    let strCookie = "";
    cookies.getAll().forEach((item) => {
        strCookie += `${item?.name}=${item?.value}; `;
    });
};