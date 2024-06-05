import React from "react";
import MainLayout from "../../../common/Layout";

import bg from "../../../assets/careers/Life@Macworld/life@macworld.webp"
import Banner from "../../../components/Career/Life@Macworld/Banner";
import WorkingAtMWL from "../../../components/Career/Life@Macworld/WorkingAtMWL";
import GetToKnow from "../../../components/Career/Life@Macworld/GetToKnow";
import { getToKnowData } from "../../../Data/Career";
import GreatWorkPlace from "../../../components/Career/Life@Macworld/GreatWorkPlace";
import Jobs from "../../../components/Career/Life@Macworld/Jobs";


export default function LifeAtMWT() {
  return <MainLayout>
 
    <Banner title="LIFE AT LOGISTICS" 
    bgImage={bg}
    desc="Logistics is a great place to develop your talent and fulfill your potential"/>
    <WorkingAtMWL title="WORKING AT LOGISTICS" desc="At Logistics you are responsible for delivering services at the highest quality to our customers demonstrating your skills every day."/>
    <GetToKnow title="GET TO KNOW LOGISTICS" data={getToKnowData}/>
    <GreatWorkPlace/>
    <Jobs/>
  </MainLayout>;
}
