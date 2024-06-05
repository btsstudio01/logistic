import React from "react";
import ConsumerBanner from "../../../components/IndustrialAerospace/ConsumerBanner";
import Project from "../../../components/IndustrialAerospace/Product";
import Stats from "../../../components/IndustrialAerospace/Stats";
import Services from "../../../components/IndustrialAerospace/Services";
import Network from "../../../components/Home/Network";
import MainLayout from "../../../common/Layout";
const IndustrialAerospace = () => {
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

export default IndustrialAerospace;
