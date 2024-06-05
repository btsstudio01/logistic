import React from "react";
import MainLayout from "../../../common/Layout";
import useScreenWidth from "../../../hooks/useScreenWidth";
import BannerWithBreadcrumb from "../../../common/BannerWithBreadcrumb";
import NavbarCarreer from "../../../components/Career/navbar";
import JobFilters from "../../../components/Career/JobFilters";

const breadcrumbItems = [
  {
    title: <a style={{ color: "#fff" }} href="">Logistics</a>
  },
  {
    title: <a style={{ color: "#fff" }} href="">Career</a>,
  },
  {
    title: <a style={{ color: "rgb(143, 143, 143)" }} href="">Find a Job</a>,
  },
];

export default function FindAJob() {
  const { screenWidth } = useScreenWidth();
  return (
    <MainLayout>
      <div style={{ marginLeft: (screenWidth > 991 ? 90 : 0) }}>
        <BannerWithBreadcrumb
          title={"JOIN US"}
          desc={"Dare to Grow!"}
          bgColor="#E30022"
          bannerHeight="340px"
          breadcrumbItems={breadcrumbItems}
        />

        <NavbarCarreer
          menuItems={[
            { label: "FIND A JOB" },
            { label: "MY CANDIDATE PROFILE" },
            { label: "SIGN UP FOR JOB ALERTS" },
          ]}
          extraDropdown={false}
        />

        <JobFilters />
      </div>
    </MainLayout>
  );
}
