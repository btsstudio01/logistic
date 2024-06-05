import React from "react";
import MainLayout from "../../../../common/Layout";
import useScreenWidth from "../../../../hooks/useScreenWidth";

export default function LeadingTeam() {
  const { screenWidth } = useScreenWidth();
  return (
    <MainLayout>
      <div style={{ marginLeft: screenWidth > 1024 ? 90 : 0 }}>LeadingTeam</div>
    </MainLayout>
  );
}