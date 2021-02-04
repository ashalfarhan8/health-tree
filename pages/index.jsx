import Head from "next/head";
import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Articles from "../components/Articles";
import Medicine from "../components/Medicine";
import MobileApps from "../components/MobileApps";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>HEALTH-TREE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Service />
      <Medicine />
      <MobileApps />
      <Testimonials />
      <Articles />
    </Layout>
  );
}
