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
      <div className="flex flex-col">
        <Header />
        {children}
      </div>
    </>
  );
}