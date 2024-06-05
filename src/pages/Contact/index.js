import React from "react";
import { BannerData } from "../../Data/Contact";

import MainLayout from "../../common/Layout";
// import Banner from "../../common/Banner";
// import CareerBanner from "../../components/Contact/Banner";
import GetInTouch from "../../components/Contact/GetInTouch";
// import ChatWithUs from "../../components/Contact/ChatWithUs";
// import SafeWithUs from "../../common/SafeWithUs";
// import { safeWithUseData } from "../../Data/Constant";
// import ChooseUs from "../../common/ChooseUs";
// import { chooseUsData } from "../../Data/Constant";
// import KeySector from "../../common/KeySector";
// import Transform from "../../components/Transform";
import Banner_Bg_Img from "../../assets/contact/contact-us-1920-464.png";
import Banner_Background from "../../common/BannerWithBreadcrumb/index";
import useScreenWidth from "../../hooks/useScreenWidth";

const breadcrumbItems = [
  {
    title: (
      <a style={{ color: "#fff" }} href="">
        Logistics
      </a>
    ),
  },
  {
    title: (
      <a style={{ color: "#fff" }} href="">
        Career
      </a>
    ),
  },
  {
    title: (
      <a style={{ color: "rgb(143, 143, 143)" }} href="">
        Find a Job
      </a>
    ),
  },
];

const Contact = () => {
  const { screenWidth } = useScreenWidth();
  return (
    <>
      <MainLayout>
        {/* <Banner
          title={BannerData.title}
          bgImage={BannerData.image}
          desc={BannerData.desc}
        /> */}

        <div style={{ marginLeft: screenWidth > 991 ? 90 : 0 }}>
          <Banner_Background
            bgColor={
              "transparent linear-gradient(90deg, #1d4289, transparent) 0 0 no-repeat padding-box"
            }
            bgImage={Banner_Bg_Img}
            bannerHeight={"35vh"}
            title={"CONTACT US"}
            desc={BannerData.title}
            breadcrumbItems={breadcrumbItems}
          />
        </div>

        <GetInTouch />

        {/*<ChatWithUs />

        <ChooseUs title={chooseUsData.title} Data={chooseUsData.items} />

        <Transform />

        <KeySector /> */}
      </MainLayout>
    </>
  );
};

export default Contact;
