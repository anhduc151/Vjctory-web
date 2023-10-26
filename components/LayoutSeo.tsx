import { ReactNode } from 'react';
import { NextSeo } from "next-seo";
import Head from 'next/head';

interface LayoutProps {
    title: string;
    children: ReactNode;
    pathname: any;
}

const LayoutSeo = ({ title, children, pathname }: LayoutProps) => {
    return (
        <>
            <NextSeo
                title={title}
                description='Victory is a Singapore-based company – a game studio specializing in designing and producing mobile games - founded in 2018.'
                canonical={`https://vjctory.com${pathname}`}
                openGraph={{
                    url: `https://vjctory.com${pathname}`,
                    title: title,
                    description: "Victory is a Singapore-based company – a game studio specializing in designing and producing mobile games - founded in 2018."
                }}
            />
            <Head>
                <title>{title}</title>
                <link rel="" href="/images/favicon.ico" />
                <meta name="facebook-domain-verification" content="nhrft680digf8i372uyu9aoiunc8w0" />
                <meta name="google-site-verification" content="Co4lzWNX3Y_zMlh0K3pdbb0k7HveMNlpW58uwyKR8k8" />
                <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
                <meta name="theme-color" content="#000000"></meta>
                <meta name="keywords" content="gametamin, Gametamin, Công ty Gametamin, Traffic Jam Cars Puzzle, Traffic Jam Car Puzzle Match 3, Tuyển dụng Gametamin, Solitaire, Basic, Vjctory, Victory"></meta>
            </Head>
            {children}
        </>
    );
};

export default LayoutSeo;
