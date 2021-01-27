// import styles from "../styles/Home.module.css";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
