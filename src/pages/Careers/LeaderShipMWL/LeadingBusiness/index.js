import React from "react";
import MainLayout from "../../../../common/Layout";
import {Image} from "antd";
import useScreenWidth from "../../../../hooks/useScreenWidth";
import Banner from "../../../../components/Career/LeadingBusiness/Banner";
import BannerSmallScreen from "../../../../components/Career/LeadingBusiness/SmallBanner";
import NavbarCareer from "../../../../components/Career/navbar";
import WorkingAtMWL from "../../../../components/Career/LifeAtMacworld/WorkingAtMWL";
import InfortmationSection from "../../../../components/Career/informationSection";
import aboutmeimg from "../../../../assets/careers/Leadershipmwl/LeadingBusiness/Nadia-Ribeiro-6_0-768-768.webp";
import InspiringLeaders from "../../../../components/Career/LeadershipAtMWL/InspiringLeaders";
import impimg from "../../../../assets/careers/Leadershipmwl/LeadingBusiness/imp of leadership.webp";
import Info from "../../../../components/Career/LeadingBusiness/Info";
import nadia from "../../../../assets/careers/Leadershipmwl/LeadingBusiness/nadia.webp";

const aboutMeData = [
  {
    heading: "About Me",
    subHeading1:
      "I was born in Cairo, Egypt, raised in Jordan and I have also lived in the UK, US and Brazi. \\I joined EGL (a CEVA predecessor) in 2000, to manage air and ocean freight for LATAM. That took me to Miami for three years, until EGL joined with TNT to form CEVA. In 2013 I had a moment of insanity, and left for 3 years! But I came back and have been here ever since; it was like coming home. Nowadays, I am Managing Director- Latin America. On a more personal matter, I am married and have 2 daughters.",
    buttonText: "",
    image: aboutmeimg,
    imgFirst: true,
  },
  
];
const importancedata=[{
  heading:"The importance of Leadership:",
  subHeading1:"My focus is on leading the business - but business leadership doesn’t work if you don’t have team leadership. The best way to lead is to make your team feel valued and part of the vision: building it together and helping to achieve the goals. A leader is an enabler \Leading the business means successfully combining the needs of our company, employees and customers. That means understanding what our customer needs, and focusing our employees on that. The company’s objectives and employees’ ambitions and vision bring it all together. The most important thing then is execution: you have to deliver.",
  buttonText:"",
  image:impimg,
  imgFirst:false  
}]

export default function LeadingBusiness() {
  const { screenWidth } = useScreenWidth();
  return (
    <MainLayout>
      {screenWidth > 700 ? (
        <Banner
          title="'Leadership Business'"
          desc="Meet XYZ Managing Director"
        />
      ) : (
        <BannerSmallScreen
          heading="Leadership Business"
          text="Meet XYZ Managing Director"
        />
      )}
      <NavbarCareer
        menuItems={[
          { label: "XYZ,Leading Team" },
          { label: "XYZ,Leading Business" },
        ]}
      />
      <WorkingAtMWL
        title="Nadia Rebiero, Leading Business"
        desc="Nadia joined in 2000, currently Managing Director for Latin America."
      />
      <InfortmationSection data={aboutMeData} />
      <InspiringLeaders
        title="Why I Choose:"
        desc="It was a career move. I started  working for an airline cargo department, made a couple of moves and found I loved logistics, but  wanted a wider regional role was immediately a good fit for me: I see myself as an entrepreneur, and is a company where you are allowed a good degree of autonomy. I am also very aligned with the CEVA values, especially where I feel that the company is open and supports Diversity and Inclusion."
        bgcolor="white"
        boldtext="There are also great people, fun to work with, and  if you want to grow there are good internal opportunities."
        textalign="justify"
      />
      <InfortmationSection data={importancedata}/>
      <Info title="Leading Business:" desc={[{boldtext:"There is very open communication within CEVA: the structure is very flat, flexible and informal. We are very agile." , text:"In my experience, some other companies are slow, rigid and inflexible, with little access to higher levels. That’s not the case at CEVA: it is a customer focused company. You can feel it in our meetings, where we talk about customers much more than about internal processes."},
    {boldtext:"Our support functions – IT and HR - work with the business." , text:"And there’s a strong culture of recognition and celebration, such as our CEO mentioning business successes in global announcements and thanking people who achieved a business win."}]}/>
    <div style={{marginTop:"2rem" , width: screenWidth>768?"93%":"100%" , padding:screenWidth>768?"4rem":"1rem" , marginLeft:screenWidth>768 ? "9rem" :"0rem"}} >
      <Image src={nadia} preview={false} style={{width:"100%" , height:"100%" , objectFit:"cover"}}/>
    </div>
    </MainLayout>
  );
}
