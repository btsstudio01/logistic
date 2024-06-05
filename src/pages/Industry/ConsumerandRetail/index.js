import React from "react";
import ConsumerBanner from "../../../components/ConsumerandRetail/ConsumerBanner";
import Project from "../../../components/ConsumerandRetail/Product";
import Stats from "../../../components/ConsumerandRetail/Stats";
import Services from "../../../components/ConsumerandRetail/Services";
import Network from "../../../components/Home/Network";
import MainLayout from "../../../common/Layout";
const ConsumerandRetail = () => {
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

export default ConsumerandRetail;
