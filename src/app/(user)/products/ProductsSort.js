'use client'

import RadioInput from "@/common/RadioInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const sortOptions = [
    {
        id: 1,
        value: "latest",
        label: "جدید ترین",
    },
    {
        id: 2,
        value: "earliest",
        label: "قدیمی ترین",
    },
    {
        id: 3,
        value: "popular",
        label: "محبوب ترین",
    },
];

const ProductsSort = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    console.log(searchParams.get("sort"));

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    const [sort, setSort] = useState("");

    const sortHandler = (e) => {
        const value = e.target.value;
        setSort(e.target.value);
    router.push(pathname+"?"+createQueryString("sort",value))
    };

    useEffect(()=>{
        setSort(searchParams.get("sort") || "");
    },[searchParams])

    return (
        <div>
            <p className="font-bold mb-4">مرتب سازی</p>
            {sortOptions.map((item) => {
                return (
                    <RadioInput
                        key={item.id}
                        id={item.id}
                        label={item.label}
                        name="product-sort"
                        value={item.value}
                        checked={sort === item.value}
                        onChange={sortHandler}
                    />
                );
            })}
        </div>
    );
};

export default ProductsSort;
