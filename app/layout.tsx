
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ui Game build by Leonel Yimga ",
    description: "Ui Game build ",
};



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    


    return (

        <html lang="en" className="light" >
            <meta charSet="utf-8"/>
            <body className={`flex justify-center h-full  overflow-hidden bg-white items-center w-full `}>
                <div className="flex w-full gap-x-4 max-w-[1440px] py-8  h-full flex-col">

                        <div className="w-full  flex min-h-screen relative  flex-col justify-start items-start">
                        {children}
                        </div>
                    </div>

                
            </body>
        </html>
    );
}
