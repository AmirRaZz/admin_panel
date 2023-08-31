'use client'

import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";
import PaymentTable from "./PaymentTable";

const Payments = () => {
    const {data, isLoading}=useGetUser()
    const {user, payments}=data || {};

    if (isLoading) return <Loading/>

    return (
        <div>
            <h1>سفارشات کاربر</h1>
            <PaymentTable payments={payments} />
        </div>
    );
}

export default Payments;