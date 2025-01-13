
import type { Metadata } from "next";
import {  Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "free template portfolio build a leonel yimga ",
    description: "For help developer with creation of her portfolio ",
};

// const lenisOptions = {
//     lerp: 0.1,
//     duration: 1.5,
//     smoothTouch: false, 
//     smooth: true,
//   };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <html lang="en" className="light" >
             {/* <ReactLenis root options={lenisOptions}> */}
            <body className={`flex justify-center h-full bg-white items-center w-full ${inter.className}`}>
                <div className="flex w-full gap-x-4 px-8  lg:px-20 lg:py-10 py-4  h-ful justify-start lg:justify-center items-center flex-col">

                    <div className="flex  w-full relative  lg:flex-row flex-col min-h-[90vh]  h-full  justify-start items-start  ">
                        <div className=" w-full  lg:w-4/12 z-50 relative  lg:sticky top-0 left-0 ">
                        <Header/>
                        </div>
                        <div className="lg:w-9/12 lg:pt-0 pt-40 w-full flex min-h-screen relative  flex-col justify-start items-start">
                        {children}
                        </div>
                    </div>

                </div>
            </body>
            {/* </ReactLenis> */}
        </html>
    );
}
