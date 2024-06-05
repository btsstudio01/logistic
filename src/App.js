import React, { Component, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NewsandEvents from "./pages/NewsandEvents";
import OnlineInquiry from "./pages/OnlineInquiry";
import Services from "./pages/Services";
import Tracking from "./pages/Tracking";
import AirFreight from "./pages/AirFreight";
import SeaFreight from "./pages/SeaFreight";
import LandFreight from "./pages/LandFreight";
import Warehousing from "./pages/Warehousing";
import Relocation from "./pages/Relocation";
import ProjectCargo from "./pages/ProjectCargo";

import OceanFreight from "./pages/Oceanfreighht";
//insttry
import Automotive from "./pages/Industry/Automotive";
import ComsumerandRetail from "./pages/Industry/ConsumerandRetail";
import Ecommerce from "./pages/Industry/Ecommerce";
import Energy from "./pages/Industry/Energy";
import Healthcare from "./pages/Industry/Healthcare";
import IndustrialAerospace from "./pages/Industry/IndustrialAerospace";
import ShowFreight from "./pages/Industry/ShowFreight";
import Technology from "./pages/Industry/Technology";
import ContractLogistic from "./pages/ContractLogistic";
import Quote from "./pages/Quote";
import UserDashboard from "./pages/UserDashboard";
import ProtectedRoute from "./utils/protectedRoutes";
import StatusCard from "./common/StatusCard";
import jwtDecode from "jwt-decode";
import apiRequest from "./common/apiRequest";
import Login from "./pages/Login";

// ===========  Redux =====
import persistor, { store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ErrorPage from "./pages/Mantainence";
import Maintence from "./pages/Mantainence";
import Register from "./pages/Register";
import Verify from "./pages/verify";
import FindAJob from "./pages/Careers/FindAJob";
import LeaderShipMWL from "./pages/Careers/LeaderShipMWL";
import LifeAtMWT from "./pages/Careers/LifeAtMWL";
import CevaTalentsApproach from "./pages/Careers/LifeAtMWL/CevaTalentsApproach";
import DiversionAndInclusion from "./pages/Careers/LifeAtMWL/DiversityAndInclusion";
import MyCandidateProfile from "./pages/Careers/FindAJob/MyCandidateProfile";
import SignUpForJobAlerts from "./pages/Careers/FindAJob/SignUpForJobAlerts";
import CareerLogin from "./pages/Careers/Login";
import LeadingBusiness from "./pages/Careers/LeaderShipMWL/LeadingBusiness";
import LeadingTeam from "./pages/Careers/LeaderShipMWL/LeadingTeam";

function App() {
  const [newstate, setNewState] = useState({});

  const [isLogin, setLogin] = useState(true);

  async function fetchDataFromApi() {
    if (localStorage.getItem("access-token")) {
      setLogin(true);
      try {
        const jwt = localStorage.getItem("access-token");
        const user = jwtDecode(jwt);

        const res = await apiRequest(process.env.REACT_APP_CALCULATOR, {
          url: `users/getUser/${user.userId}`,
          method: "get",
          headers: { "Content-Type": "application/json" },
        });
        if (res) {
          console.log("res", res);
          setNewState(res);
          console.log("ddd", newstate);
        }
      } catch (err) {}
    } else {
      setNewState(null);
    }
  }

  useEffect(() => {
    if (isLogin) {
      fetchDataFromApi();
    }
  }, [isLogin]);
  console.log(newstate);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route
                exact
                path="/"
                element={<Home userId={newstate?.data?.user?._id} />}
              />
              <Route path="/home" element={<Home />} />

              <Route path="/about" element={<About />} />

              <Route path="/services" element={<Services />} />
              <Route path="/airfreight" element={<AirFreight />} />
              <Route path="/seafreight" element={<SeaFreight />} />
              <Route path="/landfreight" element={<LandFreight />} />
              <Route path="/oceanfreight" element={<OceanFreight />} />

              <Route path="/contract-logistic" element={<ContractLogistic />} />
              <Route
                path="/warehousing-and-distribution"
                element={<Warehousing />}
              />
              <Route path="/reloaction" element={<Relocation />} />
              <Route path="/projectcargo" element={<ProjectCargo />} />
              <Route path="/contact" element={<Contact />} />
              {/* maintance link */}
              <Route path="/tracking" element={<Maintence />} />
              {/* <Route path="/tracking" element={<Tracking />} /> */}

              {/* career routes */}
              <Route path="/career" element={<Careers />} />
              <Route path="/career/login" element={<CareerLogin />} />
              <Route path="/career/findajob" element={<FindAJob />} />
              <Route path="/career/findajob/candidateprofile" element={<MyCandidateProfile />} />
              <Route path="/career/findajob/signupforalerts" element={<SignUpForJobAlerts />} />
              <Route path="/career/leadershipmwl" element={<LeaderShipMWL />} />
              <Route path="/career/leadershipmwl/leadingbusiness" element={<LeadingBusiness />} />
              <Route path="/career/leadershipmwl/leadingteam" element={<LeadingTeam />} />
              <Route path="/career/lifeatmwl" element={<LifeAtMWT />} />
              <Route path="/career/lifeatmwl/talentsapproach" element={<CevaTalentsApproach />} />
              <Route path="/career/lifeatmwl/diversityinclusion" element={<DiversionAndInclusion />} />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route path="/error" element={<Maintence />} />

              {/* Quote */}
              {/* <Route path="/quote" element={<Maintence />} /> */}
              <Route path="/quote" element={<Quote />} />
              <Route path="/users/verify" element={<Verify />} />

              <Route
                path="/user/:id/*"
                element={
                  <ProtectedRoute>
                    <UserDashboard userData={newstate} />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

// CommentedOut-Routes
// {/* <Route path="/news-and-events" element={<NewsandEvents />} /> */}
//         {/* <Route path="/statuscard" element={<StatusCard />} /> */}
//         {/* <Route path="/online-inquiry" element={<OnlineInquiry />} /> */}
//         {/* <Route path="/automotive" element={<Automotive />} /> */}

//         {/* <Route path="/energy" element={<Energy />} /> */}

//         {/* <Route path="/healthcare" element={<Healthcare />} /> */}
//         {/* <Route
//           path="/industrial-aerospace"
//           element={<IndustrialAerospace />}
//         /> */}

//         {/* <Route path="/show-freight" element={<ShowFreight />} /> */}
//         {/* <Route path="/technology" element={<Technology />} /> */}

//         {/* <Route
//           path="/consumer-and-retails"
//           element={<ComsumerandRetail />}
//         /> */}

//         {/* <Route path="/e-commerce" element={<Ecommerce />} /> */}
