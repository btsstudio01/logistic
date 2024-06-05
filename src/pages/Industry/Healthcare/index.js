import React from "react";
import ConsumerBanner from "../../../components/Healthcare/ConsumerBanner";
import Project from "../../../components/Healthcare/Product";
import Stats from "../../../components/Healthcare/Stats";
import Services from "../../../components/Healthcare/Services";
import Network from "../../../components/Home/Network";
import MainLayout from "../../../common/Layout";
const Healthcare = () => {
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

export default Healthcare;
