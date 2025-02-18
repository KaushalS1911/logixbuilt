import {Geist,  Poppins} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@mui/material";
import theme from "../components/theme/theme";
import Footer from "../components/global/footer";
import Navigation from "../components/global/navigation";
import Footer2 from "../components/global/footer2";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ["latin"],
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${poppins.variable} ${geistSans.variable}`} cz-shortcut-listen="true">
        <ThemeProvider theme={theme}>
            {/*<Navbar />*/}
            <Navigation />
                {children}
            <Footer2/>
            {/*<Footer />*/}
        </ThemeProvider>
        </body>
        </html>
    );
}
