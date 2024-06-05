import React from "react";
import ConsumerBanner from "../../../components/Energy/ConsumerBanner";
import Project from "../../../components/Energy/Product";
import Stats from "../../../components/Energy/Stats";
import Services from "../../../components/Energy/Services";
import Network from "../../../components/Home/Network";
import MainLayout from "../../../common/Layout";
const Energy = () => {
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

export default Energy;
