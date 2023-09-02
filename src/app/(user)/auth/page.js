"use client";

import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import http from "@/services/httpService";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkOtp, getOtp } from "@/services/authServices";
import CheckOTPForm from "./CheckOTPForm";
import { useRouter } from "next/navigation";

const RESEND_TIME = 90;
const AuthPage = () => {
    const [phoneNumber, setPhoneNumber] = useState("09375964392");
    const [step, setStep] = useState(2);
    const [otp, setOtp] = useState("");
    const router=useRouter()
    const [time, setTime] = useState(RESEND_TIME);
    const {
        data: otpResponse,
        error,
        isLoading,
        mutateAsync: mutateGetOtp,
    } = useMutation({
        mutationFn: getOtp,
    });
    const { mutateAsync: mutateCheckOtp, isLoading:isCheckingOtp } = useMutation({
        mutationFn: checkOtp,
    });

    const phoneNumberHandler = (event) => {
        setPhoneNumber(event.target.value);
    };

    const sendOTPHandler = async (event) => {
        event.preventDefault();
        try {
            // const {data} = await http.post("/user/get-otp", { phoneNumber });
            const data = await mutateGetOtp({ phoneNumber });
            console.log(data);
            toast.success(data.message);
            setStep(2);
            setTime(RESEND_TIME);
            setOtp("")
        } catch (error) {
            toast.error(error?.response?.data?.message);
            // console.log(error?.response?.message?.data?.message);
        }
    };

    const checkOTPHandler = async (event) => {
        event.preventDefault();
        try {
            const {message,user} = await mutateCheckOtp({ phoneNumber, otp });
            console.log(data);
            toast.success(message);
            if (user.isActive) {
                router.push("/")
            } else{
                router.push("/complete-profile")
            }

        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    useEffect(() => {
        const timer =
            time > 0 &&
            setInterval(() => {
                setTime((t) => t - 1);
            }, 1000);
            return ()=>{
              if (timer) clearInterval(timer);
            }
    }, [time]);

    const renderSteps = () => {
        switch (step) {
            case 1:
                return (
                    <SendOTPForm
                        phoneNumber={phoneNumber}
                        onChange={phoneNumberHandler}
                        onSubmit={sendOTPHandler}
                        isLoading={isLoading}
                    />
                );
            case 2:
                return (
                    <CheckOTPForm
                        otp={otp}
                        setOtp={setOtp}
                        onSubmit={checkOTPHandler}
                        onBack={() => setStep((s) => s - 1)}
                        time={time}
                        onResendOtp={sendOTPHandler}
                        otpResponse={otpResponse}
                        isCheckingOtp={isCheckingOtp}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex justify-center">
            <div className="w-full sm:max-w-sm">{renderSteps()}</div>
        </div>
    );
};

export default AuthPage;
