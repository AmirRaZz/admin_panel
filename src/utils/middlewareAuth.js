
const middlewareAuth = async (req) => {
    let strCookie = "";
    req.cookies.getAll().forEach((item) => {
        strCookie += `${item?.name}=${item?.value}; `;
    });

    const { data } = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
        {
            method: "GET",
            credentials: "include",
            headers: {
                Cookie: strCookie
                // `${req.cookies.get("accessToken")?.name}=${
                //     req.cookies.get("accessToken")?.value
                // }; ${req.cookies.get("refreshToken")?.name}=${
                //     req.cookies.get("refreshToken")?.value
                // }`,
            },
        }
    ).then((res) => res.json());
    const { user } = data || {};
    return user;
};

export default middlewareAuth