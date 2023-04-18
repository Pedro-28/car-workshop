import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="bg-[#F3F3F3] flex flex-col">
        <Header />
        <div className="h-[calc(100vh-4rem)] w-screen">
          {children}
        </div>
      </div>
    </>
  );
}