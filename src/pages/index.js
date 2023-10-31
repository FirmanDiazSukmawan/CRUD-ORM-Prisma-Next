import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ini Test title",
  description: "mana ga ada",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title} </title>
        <meta name="description" content={metadata.description} />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex ">
          <h1> Hello World</h1>

          <Link href={"/detail"}> PENCET INI KE DETAIL</Link>
        </div>
      </main>
    </>
  );
}
