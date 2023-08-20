"use client"

import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import http from "@/services/httpService";
import { toast } from "react-hot-toast";

const AuthPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("")

  const phoneNumberHandler=(event)=>{
    setPhoneNumber(event.target.value)
  }

  const sendOTPHandler = async (event)=>{
    event.preventDefault()
    try {
      const {data} = await http.post("/user/get-otp", { phoneNumber });
      console.log(data.data);
    } catch (error) {
      toast.error(error?.response?.message?.data?.message);
      // console.log(error?.response?.message?.data?.message);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">
        <SendOTPForm phoneNumber={phoneNumber} onChange={phoneNumberHandler} onSubmit={sendOTPHandler}/>
      </div>
    </div>
  )
}

export default AuthPage