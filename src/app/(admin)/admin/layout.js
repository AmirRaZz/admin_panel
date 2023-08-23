import vazirFont from "@/constants/localFonts";
import "../../globals.css";
import Providers from "@/pages/Providers";
import { Toaster } from "react-hot-toast";

export const metadata = {
    title: "Admin Shop Panel",
    description: "admin profile",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${vazirFont.variable} font-sans`}>
                <Providers>
                    <Toaster />
                    <div className="container xl:max-w-screen-xl">
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    );
}
