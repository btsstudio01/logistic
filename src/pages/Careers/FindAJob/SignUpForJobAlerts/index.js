import React from "react";
import MainLayout from "../../../../common/Layout";
import useScreenWidth from "../../../../hooks/useScreenWidth";

export default function SignUpForJobAlerts() {
  const { screenWidth } = useScreenWidth();
  return (
    <MainLayout>
      <div style={{ marginLeft: screenWidth > 1024 ? 90 : 0 }}>SignUpForJobAlerts</div>
    </MainLayout>
  );
}
