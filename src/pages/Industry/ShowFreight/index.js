import React from "react";
import ConsumerBanner from "../../../components/Showfreight/ConsumerBanner";
import Project from "../../../components/Showfreight/Product";
import Stats from "../../../components/Showfreight/Stats";
import Services from "../../../components/Showfreight/Services";
import Network from "../../../components/Home/Network";
import MainLayout from "../../../common/Layout";
const ShowFreight = () => {
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

export default ShowFreight;
