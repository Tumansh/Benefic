import "./App.css";
import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Cards from "./components//latest_insights/Cards";
import Goals_About_Template from "./components/about_and_our_goals/Goals_About_Template";
import Banner from "./components/banner/banner";
import Client from "./components/clients/client";
import PrivacyandTerms from "./components/footer/PrivacyandTerms";
import Footer from "./components/footer/footer";
import FooterImg from "./components/footer/footerImg";
import Form_section from "./components/form/form_section";
import Header from "./components/header/header";
import Services from "./components/services/services";
import Serving_globally from "./components/serving_globally/serving_globally";
import TestimonialSec from "./components/testimonials/testimonialSec";
import AboutUsImg from "./favicons/AboutUsImg.png";
import OurGoalsImg from "./favicons/OurGoalsImg.png";
import TabSec from "./components/tab_section/tabSec";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Goals_About_Template classe="about" image={AboutUsImg} />
      <Goals_About_Template
        classe="our_goals flex-row-reverse"
        image={OurGoalsImg}
      />
      <TabSec></TabSec>
      <Serving_globally></Serving_globally>
      <Cards></Cards>
      <Client></Client>
      <TestimonialSec></TestimonialSec>
      <Form_section></Form_section>
      <FooterImg></FooterImg>
      <Footer />
      <PrivacyandTerms></PrivacyandTerms>
    </>
  );
}

export default App;
