'use client'
import Head from "next/head";
import { FC, useEffect, useState } from "react"
import FavIcon from "../../accets/images/gear.png"
import Script from "next/script";
import Loader from "../ui/Loader";
import '../../globals.css';
import { Provider } from "react-redux";
import { store } from "@/app/store/store";

interface ILayout {
    children: any, // это что за хзуйня? надо думать
    title: string
}

const Layout: FC<ILayout> = ({ children, title }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const timeout = setTimeout(() => { setIsLoading(false) }, 2500);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    return <div>
        <Provider store={store}>
            <Head>
                <title>{title} | taxi app</title>
                <meta name="description" content="Generated by create Next app" />
                <link rel="shortcut icon" href={FavIcon.src} type="image/png" />
            </Head>

            <Script
                strategy="beforeInteractive"
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAP_KEY}&libraries=places`}
            />

            <div style={{ maxWidth: 480 }}>
                {isLoading ? <Loader /> : children}
            </div>
        </Provider>
    </div>
}

export default Layout