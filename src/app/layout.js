import vazirFont from "@/constants/localFonts";
import "./globals.css";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

export const metadata = {
    title: "Next Shop Panel",
    description: "Next.js admin panel project",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${vazirFont.variable} font-sans`}>
                <Toaster/>
                <Header />
                <div className="container xl:max-w-screen-xl">{children}</div>
            </body>
        </html>
    );
}
