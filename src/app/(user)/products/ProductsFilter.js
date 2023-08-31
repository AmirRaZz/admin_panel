"use client";

import CheckBox from "@/common/CheckBox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
const ProductsFilter = ({ categories }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [selectedCategories, setSelectedCategories] = useState(
        searchParams.get("category")?.split(",") || []
    );

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    // console.log(searchParams.getAll("category")[0].split(",") || []); // wrong solution
    // console.log(searchParams.get("category")?.split(",") || []);       // correct solution

    const categoryHandler = (e) => {
        const value = e.target.value;
        if (selectedCategories.includes(value)) {
            const categories = selectedCategories.filter((c) => c !== value);
            setSelectedCategories(categories);
            router.push(
                pathname + "?" + createQueryString("category", categories)
            );
        } else {
            setSelectedCategories([...selectedCategories, value]);
            router.push(
                pathname +
                    "?" +
                    createQueryString("category", [
                        ...selectedCategories,
                        value,
                    ])
            );
        }
    };

    return (
        <div>
            <p className="font-bold mb-4">دسته بندی ها</p>
            <ul className="space-y-4">
                {categories.map((category) => {
                    return (
                        <CheckBox
                            key={category._id}
                            id={category._id}
                            value={category.englishTitle}
                            name="product-type"
                            label={category.title}
                            checked={selectedCategories.includes(
                                category.englishTitle
                            )}
                            onChange={categoryHandler}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default ProductsFilter;
