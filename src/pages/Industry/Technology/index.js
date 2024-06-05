import React from "react";
import ConsumerBanner from "../../../components/Technology/ConsumerBanner";
import Project from "../../../components/Technology/Product";
import Stats from "../../../components/Technology/Stats";
import Services from "../../../components/Technology/Services";
import Network from "../../../components/Home/Network";
import MainLayout from "../../../common/Layout";
const Technology = () => {
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

export default Technology;
