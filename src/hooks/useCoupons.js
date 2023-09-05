import { addNewCoupon, deleteCoupon, getAllCoupons, updateCoupon } from "@/services/couponService";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetCoupons = ()=>
    useQuery({
        queryKey:["get-coupons"],
        queryFn:getAllCoupons,
        retry:false,
        refetchOnWindowFocus:true
    })

export const useGetOneCoupon = (id)=>
    useQuery({
        queryKey:["get-coupon",id],
        queryFn:()=>getAllCoupons(id),
        retry:false,
        refetchOnWindowFocus:true
    })

export const useAddNewCoupon=()=> useMutation({mutationFn:addNewCoupon})

export const useUpdateCoupon=()=> useMutation({mutationFn:updateCoupon})

export const useRemoveCoupon = () => useMutation({ mutationFn: deleteCoupon });