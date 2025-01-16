
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
            <meta charSet="utf-8" />
            <body className={`flex justify-center h-full   bg-white items-center w-full `}>
                <div className="flex w-full gap-x-4 max-w-[1440px] py-8  h-full flex-col">

                    <div className="w-full  flex min-h-screen relative  flex-col justify-start items-start">
                        {children}
                    </div>
                    <footer className="flex w-full px-8 md:px-4  justify-center items-center ">
                        <div className="flex w-full  justify-between py-4 text-xs md:text-sm items-center border-t border-neutral-700/30">
                            <Link href="https://leonelyimga.com" className="text-neutral-600"><span className="text-neutral-700">Build By</span> <b>Leonel Yimga</b> </Link>
                            <Link href="https://www.figma.com/design/9kI9yPEyWVhnkW79wpvtHy/Game-Shop-Cat-Game-(Community)?node-id=2-2&t=QZ2SjEMn2a8kHYEu-0" className="text-neutral-600"><span className="text-neutral-700/30">Inspired By</span> <b>This design </b> </Link>
                        </div>
                    </footer>
                </div>


            </body>
        </html>
    );
}
