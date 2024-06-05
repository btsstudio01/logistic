import React from "react";

import MainLayout from "../../../common/Layout";
import bg from "../../../assets/careers/Leadershipmwl/bgimage.webp";
// import Banner from "../../../components/Career/Life@Macworld/Banner";
import WorkingAtMWL from "../../../components/Career/LifeAtMacworld/WorkingAtMWL";
import LeadershipModal from "../../../components/Career/LeadershipAtMWL/LeadershipModal";
import InspiringLeaders from "../../../components/Career/LeadershipAtMWL/InspiringLeaders";
import Banner from "../../../components/Career/LifeAtMacworld/Banner";
import useScreenWidth from "../../../hooks/useScreenWidth";
import BannerSmallScreen from "../../../components/Career/SmallScreenBanner";
import NavbarCareer from "../../../components/Career/navbar";

export default function LeaderShipMWL() {
  const { screenWidth } = useScreenWidth();

  return (
    <MainLayout>
      {screenWidth < 500 ? (
        <BannerSmallScreen
          heading="Leadership at Logistics"
          bgImage={bg}
          text="Leadership is the foundation of our people's and our companies success"
        />
      ) : (
        <Banner
          title="Leadership at Logistics"
          bgImage={bg}
          desc="Leadership is the foundation of our people's and our companies success"
          height="60vh"
        />
      )}
      <NavbarCareer
        menuItems={[
          { label: "Leadership at Logistics" },
          { label: "leading teams" },
          { label: "leading business" },
        ]}
      />

      <WorkingAtMWL
        title="LEADERSHIP THE LOGISTICS WAY"
        desc="CEVA is equally focused on the vital role of leadership in accommodating the needs of customers, service partners, owners and – of course - employees."
      />
      <LeadershipModal
        title="Our Defined Leadership Model has three pillars"
        pillarss={[
          {
            title: "Leading Teams,",
            desc: " in which communication, teamwork, change and people development play key roles;",
          },
          {
            title: "Leading Self,",
            desc: " in which staff are encouraged to be self-aware, to develop themselves, to be passionate and to be humble ",
          },
          {
            title: "Leading Business,",
            desc: "in which Vision and Strategy, Customer Centricity, Expertise and Performance are the drivers.",
          },
        ]}
      />
      <InspiringLeaders
        title="Discover some of our Inspiring Leaders"
        desc="As you read this section and consider a career with Logistics, please take a few moments to read what three of our senior managers feel about Logistics – why they joined us, what they found, and what their ideals and their ambitions are. After all, who better to tell you what to expect from Logistics, than the people who are shaping it today, and for whom you may be working tomorrow?"
        bgcolor="#E8E8E8"
        boldtext=""
        textalign="center"
      />
    </MainLayout>
  );
}
