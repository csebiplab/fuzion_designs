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
      <Construction />
      </section>

      <section>
        <LocalContractors/>
      </section>

      <section>
        <WorkingProcess />
      </section>

      <section></section>

      <section>
        <ExpertBuilders/>
      </section>

      <section></section>

      <section>
        <CustomDesign/>
      </section>

      <section>
        <HomeAdditionDesign />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <FAQ />
      </section>

      <section>
        <AdditionContractors />
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
