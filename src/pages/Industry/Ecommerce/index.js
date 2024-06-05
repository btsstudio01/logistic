import React from "react";
import ConsumerBanner from "../../../components/Ecommerce/ConsumerBanner";
import Project from "../../../components/Ecommerce/Product";
import Stats from "../../../components/Ecommerce/Stats";
import Services from "../../../components/Ecommerce/Services";
import Network from "../../../components/Home/Network";
import MainLayout from "../../../common/Layout";
const Ecommerce = () => {
  return (
    <>
      <MainLayout>
        <ConsumerBanner />
        <Project />

        <Services />
        <Stats />
        <Network />
      </MainLayout>
    </>
  );
};

export default Ecommerce;
