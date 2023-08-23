'use client'

import { logOut } from "@/services/authServices";
import Link from "next/link";

const SideBar = () => {

  const logOutHandler=async() => {
    await logOut()
    // localStorage.removeItem("userInfo")
    // localStorage.removeItem("cartItems")
    // localStorage.removeItem("token")
    document.location.href="/"
  }

  return (
    <div>
        <ul className="flex flex-col space-y-8">
            <li>
                <Link href="/">صفحه اصلی</Link>
            </li>
            <li>
                <Link href="/profile">داشبورد</Link>
            </li>
            <li>
                <Link href="/profile/me">اطلاعات کاربری</Link>
            </li>
            <li>
                <button onClick={logOutHandler}>خروج از حساب کاربری</button>
            </li>
        </ul>
    </div>
  )
}

export default SideBar