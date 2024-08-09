import React from "react";

import HomeBanner from "./HomeBanner/HomeBanner";
import Brand from "./Brand/Brand";
import WorkingProcess from "./WorkingProcess/WorkingProcess";
import FAQ from "./FAQ/FAQ";
import ContactUs from "./ContactUs/ContactUs";
import HomeAdditionDesign from "./HomeAdditionDesign/HomeAdditionDesign";
import Construction from "./Construction/Construction";
import Location from "./Location/Location";
import KnowAboutHomeAdditions from "./KnowAboutHomeAdditions/KnowAboutHomeAdditions";
import LocalContractors from "./LocalContractors/LocalContractors";
import ExpertBuilders from "./ExpertBuilders/ExpertBuilders";
import AdditionContractors from "./AdditionContractors/AdditionContractors";
import Services from "./Services/Services";
import AboutUs from "./AboutUs/AboutUs";
import CustomDesign from "./CustomDesign/CustomDesign";
import HomeAdditionsTypes from "./HomeAdditionsTypes/HomeAdditionsTypes";
import Gallery from "./Gallery/Gallery";
import CostOfHomeAddition from "./CostOfHomeAddition/CostOfHomeAddition";
import Review from "./Review/Review";
import Benefits from "./Benefits/Benefits";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Areas from "./Areas/Areas";

const HomeAdditionsInToronto = () => {
  return (
    <div>
      <section>
        <HomeBanner />
      </section>

      <section>
        <Brand />
      </section>

      <section>
        <AboutUs/>
      </section>

      <section>
        <KnowAboutHomeAdditions />
      </section>

      <section>
        <HomeAdditionsTypes />
      </section>
      
      <section>
      <Construction />
      </section>

      <section>
        <LocalContractors/>
      </section>

      <section>
        <WorkingProcess />
      </section>

      <section>
        <CustomDesign/>
      </section>

      <section>
        <HomeAdditionDesign />
      </section>

      <section>
        <Gallery/>
      </section>

      <section>
        <ExpertBuilders/>
      </section>

      <section>
        <CostOfHomeAddition/>
      </section>

      <section>
        <Review/>
      </section>

      <section>
        <Services />
      </section>

      <section>
        <Benefits />
      </section>

      <section>
        <WhyChooseUs />
      </section>

      <section>
        <FAQ />
      </section>

      <section>
        <AdditionContractors />
      </section>

      <section>
        <Areas />
      </section>

      <section>
        <ContactUs />
      </section>

      <section>
        <Location />
      </section>
    </div>
  );
};

export default HomeAdditionsInToronto;
