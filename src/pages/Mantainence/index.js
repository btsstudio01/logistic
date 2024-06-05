import React from "react";
import MainLayout from "../../common/Layout";
import { Colors } from "../../constant/theme/theme";
import {
  HeroHeading,
  HeroSubHeading,
  Line,
  Subheading,
} from "../../common/globalStyle";
import { Grid } from "antd";
const { useBreakpoint } = Grid;

const Maintence = () => {
  let screens = useBreakpoint();
  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: screens?.lg ? "90px" : "0px",
        }}
      >
        <div class="">
          <img
            decoding="async"
            fetchpriority="high"
            width={screens.md ? "600" : "440"}
            height={screens.md ? "300" : "240"}
            src="https://wichitawebsitedesign.com/wp-content/uploads/2021/01/website-maintenance-gif.gif"
            class="attachment-full size-full wp-image-608"
            alt="wichita website maintenance"
          />
        </div>
        <HeroHeading>Good Things are on the Way</HeroHeading>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Line />
        </div>

        <HeroSubHeading style={{ textAlign: "center" }}>
          Currently this Section is under maintenance.
          <br />
          Please come back later. Thank You for your patience
        </HeroSubHeading>
        <HeroSubHeading style={{ textAlign: "center" }}>
          If you have any query feel free to <a href="/contact">Contact us</a>
        </HeroSubHeading>
      </div>
    </MainLayout>
  );
};

export default Maintence;
