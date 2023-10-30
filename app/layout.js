import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import MyThemeProvider from "./utils/MyThemeProvider";
import "./globals.css";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppin.variable} ${josefin.variable}  !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-1000`}
      >
        <MyThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </MyThemeProvider>
      </body>
    </html>
  );
}
