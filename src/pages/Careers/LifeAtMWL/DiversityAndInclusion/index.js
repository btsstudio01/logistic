import React from "react";
import MainLayout from "../../../../common/Layout";
import NavbarCarreer from "../../../../components/Career/navbar";

import bg from "../../../../assets/careers/diversityAndInclusion/bg.webp";
import img1 from "../../../../assets/careers/diversityAndInclusion/img4.webp";
import img2 from "../../../../assets/careers/diversityAndInclusion/img5.webp";


import Banner from "../../../../components/Career/LifeAtMacworld/Banner";
import WorkingAtMWL from "../../../../components/Career/LifeAtMacworld/WorkingAtMWL";
// import { NetworkData } from "../../../../Data/network";
import { diversityAndInclusionData } from "../../../../Data/Career";
import { diversityAndInclusionData2} from "../../../../Data/Career";
import InfortmationSection from "../../../../components/Career/informationSection";
import BannerSmallScreen from "../../../../components/Career/SmallScreenBanner";
import { Grid } from "antd";
import ComponentTitleParagraphHorizontal from "../../../../components/Career/diversityAndInclusion/headingAndText";
import DynamicCard from "../../../../components/Career/diversityAndInclusion/dynamicCard.js";
import styled from "styled-components";

const { useBreakpoint } = Grid;

const DynamicCardDiv = styled.div`
margin: 0 auto;
align-items: center;
  width: 65%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem; /* Adjust the gap as needed */
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 4rem; /* Adjust the gap for smaller screens */
  }
`;

export default function DiversionAndInclusion() {
  const screens = useBreakpoint();
  return (
    <MainLayout >
      
      {screens.xs ? (
        <BannerSmallScreen
          bgImage={bg}
          heading=" DIVERSITY AND INCLUSION"
          text="We promote respect and foster equal opportunities"
        />
      ) : (
        <Banner
          title="DIVERSITY AND INCLUSION"
          bgImage={bg}
          desc="We promote respect and foster equal opportunities"
          height="55vh"
        />
      )}

      <NavbarCarreer
        menuItems={[
          { label: "MWL TALENT APPROACH" },
          { label: "DIVERSITY & INCLUSION" },
          { label: "REWARDS " },
          { label: "YOUR PATH TO GROW" },
        ]}
      />

      <WorkingAtMWL
        title="WE PROMOTE AND VALUE DIVERSITY"
        desc="Diversity and Inclusion is in MWL's DNA and strongly promoted because we are represented by our employees all over the world and service a diverse pallet of customers."
      />
      <InfortmationSection data={diversityAndInclusionData} />
      <ComponentTitleParagraphHorizontal
  heading="Beyond words, we are taking concrete action"
  text="A regional approach allows CEVA Logistics to 'think globally and act locally' in the planning and implementation of actions relevant to the circumstances, cultures, and laws of each region. Here are some examples of how CEVA Logistics practices Diversity & Inclusion around the world."
/>
<WorkingAtMWL
        title="DISCOVER HOW WE PRACTICE DIVERSITY AND INCLUSION AROUND THE WORLD"
        desc=""
      />
       <InfortmationSection data={diversityAndInclusionData2} />
       <DynamicCardDiv >
          
       <DynamicCard
        imgSrc={img1} // Provide the path to your image
        p1="   OUR VALUES" // Provide the text for the first paragraph
        h1=" Four core values shared by our associates" // Provide the text for the heading
        p2="  Four core values shared by our associates" // Provide the text for the second paragraph
      />
        <DynamicCard
        imgSrc={img2} // Provide the path to your image
        p1="   OUR VALUES" // Provide the text for the first paragraph
        h1=" Four core values shared by our associates" // Provide the text for the heading
        p2="  Four core values shared by our associates" // Provide the text for the second paragraph
      />

          </DynamicCardDiv>
    </MainLayout>
  );
}
