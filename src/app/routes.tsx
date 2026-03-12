/** @format */

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  Event,
  EventDetail,
  Gastronomy,
  GastronomyDetail,
  Home,
  Login,
  Register,
  TouristSite,
  TouristSiteDetail,
  Stories,
  TourGuide,
  TourGuideDetail
} from "../modules/WebPortail/pages";
import { Footer, Header } from "../modules/WebPortail/components";
import { ForgotPassword } from "../modules/WebPortail/pages/ForgotPassword";
import { DestinationDetail } from "../modules/WebPortail/pages/DestinationDetail";

const Layout = (): React.JSX.Element => {
  const location = useLocation();

  const hideHeaderRoutes = ["/", "/destination-detail/:id"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/site-touristique" element={<TouristSite />} />
        <Route path="/site-touristique/:id" element={<TouristSiteDetail />} />
        <Route path="/culture-gastronomie" element={<Gastronomy />} />
        <Route path="/destination-detail/:id" element={<DestinationDetail />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/mot-de-passe-oublie" element={<ForgotPassword />} />
        <Route path="/culture-gastronomie/:id" element={<GastronomyDetail />} />
        <Route path="/evenement" element={<Event />} />
        <Route path="/evenement/:id" element={<EventDetail />} />
        <Route path="/histoire" element={<Stories />} />
        <Route path="/histoire/:id" element={<Stories />} />
        <Route path="/guide-touristique" element={<TourGuide />} />
        <Route path="/guide-touristique/:id" element={<TourGuideDetail />} />
        {/* <Route element={<PrivateRoutes />}></Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {!shouldHideHeader && <Footer />}
    </>
  );
};

const MainRouter = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default MainRouter;
