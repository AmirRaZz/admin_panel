import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@/services/authServices";

export const useGetUser = () =>
    useQuery({
        queryKey: ["get-user"],
        queryFn: getUserProfile,
        retry: false,
        refetchOnWindowFocus: true,
    });
