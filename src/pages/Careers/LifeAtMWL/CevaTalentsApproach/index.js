import React from "react";
import MainLayout from "../../../../common/Layout";
import NavbarCarreer from "../../../../components/Career/navbar";

import bg from "../../../../assets/careers/LifeAtMacworld/talentApproach.webp";
import Banner from "../../../../components/Career/LifeAtMacworld/Banner";
import WorkingAtMWL from "../../../../components/Career/LifeAtMacworld/WorkingAtMWL";
// import { NetworkData } from "../../../../Data/network";
import { InformationSectionData } from "../../../../Data/Career";
import InfortmationSection from "../../../../components/Career/informationSection";
import BannerSmallScreen from "../../../../components/Career/SmallScreenBanner";
import { Grid } from "antd";

const { useBreakpoint } = Grid;
export default function CevaTalentsApproach() {
  
  const screens = useBreakpoint();
  return (
    <MainLayout >
      
      {screens.xs ? (
        <BannerSmallScreen
          bgImage={bg}
          heading=" TALENT APPROACH"
          text="At Logistics we recognize and utilize each individual’s talent"
        />
      ) : (
        <Banner
          title="TALENT APPROACH"
          bgImage={bg}
          desc="At Logistics we recognize and utilize each individual’s talent"
          height="55vh"
        />
      )}

      <NavbarCarreer
        menuItems={[
          { label: "TALENT APPROACH" },
          { label: "DIVERSITY & INCLUSION" },
          { label: "REWARDS " },
          { label: "YOUR PATH TO GROW" },
        ]}
      />

      <WorkingAtMWL
        title="WE RECOGNIZE EACH INDIVIDUALS' TALENT"
        desc="People are key to our business, and empowers its people: so they view working here as a career and not just a job. Your successes are noticed and celebrated."
      />
      <InfortmationSection data={InformationSectionData} />
    </MainLayout>
  );
}
