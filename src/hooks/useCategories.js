import { getCategories } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export const useGetCategories = () =>
    useQuery({
        queryKey: ["get-categories"],
        queryFn: getCategories,
        retry: false,
        refetchOnWindowFocus: true,
    });
