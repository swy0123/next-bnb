import type { Metadata } from "next";
import { Inter, Noto_Sans_KR, Roboto } from "next/font/google";
import localFont from "next/font/local";
// import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
import Header from "@/components/Header";

//로컬 폰트
const myFont = localFont({
  src: "./fonts/SEOLLEIMcool.ttf",
  display: "swap",
});

const inter = Inter({ subsets: ["latin"] });
const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

const roboto = Roboto({
  subsets: ["latin"], // preload에 사용할 subsets입니다.
  weight: ["100", "400", "700"],
  variable: "--roboto", // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Header />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <div id="root-modal" />
      </body>
    </html>
  );
}
