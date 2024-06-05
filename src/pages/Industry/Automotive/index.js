import React from "react";
import AutomotiveBanner from "../../../components/Automotive/AutomotiveBanner";
import Project from "../../../components/Automotive/Product";
import Stats from "../../../components/Automotive/Stats";
import Services from "../../../components/Automotive/Services";
import Network from "../../../components/Home/Network";
import MainLayout from "../../../common/Layout";
const Automotive = () => {
  return (
    <>
      <MainLayout>
        <AutomotiveBanner />
        <Project />

        <Services />
        <Stats />
        <Network />
      </MainLayout>
    </>
  );
};

export default Automotive;
