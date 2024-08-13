import React from "react";
import BasementRenovationsInTorontoBanner from "./BasementRenovationsInTorontoBanner/BasementRenovationsInTorontoBanner";
import AboutUs from "./AboutUs/AboutUs";
import Brand from "../HomeAdditionsInToronto/Brand/Brand";
import Areas from "../HomeAdditionsInToronto/Areas/Areas";
import ContactUs from "../HomeAdditionsInToronto/ContactUs/ContactUs";
import Location from "../HomeAdditionsInToronto/Location/Location";
import Gallery from "../HomeAdditionsInToronto/Gallery/Gallery";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Review from "../HomeAdditionsInToronto/Review/Review";
import FAQ from "./FAQ/FAQ";
import RemodelingRenovation from "./RemodelingRenovation/RemodelingRenovation";
import RenovationsFinishing from "./RenovationsFinishing/RenovationsFinishing";
import HowMuchCost from "./HowMuchCost/HowMuchCost";
import BasementUpgrade from "./BasementUpgrade/BasementUpgrade";
import BasementRenovation from "./BasementRenovation/BasementRenovation";
import ProfessionalBasementRenovation from "./ProfessionalBasementRenovation/ProfessionalBasementRenovation";
import TrustedBasement from "./TrustedBasement/TrustedBasement";
import Benefits from "./Benefits/Benefits";
import OurProcess from "./OurProcess/OurProcess";

const BasementRenovationsInToronto = () => {
  return (
    <div>
      <section>
        <BasementRenovationsInTorontoBanner />
      </section>

      <section>
        <Brand />
      </section>

      <section>
        <AboutUs />
      </section>

      <section>
        <RemodelingRenovation />
      </section>

      <section>
        <RenovationsFinishing />
      </section>

      <section>
        <ProfessionalBasementRenovation />
      </section>

      <section>
        <TrustedBasement  />
      </section>

      <section>
        <BasementRenovation />
      </section>

      <section>
        <Gallery />
      </section>

      <section>
        <HowMuchCost />
      </section>

      <section>
        <WhyChooseUs />
      </section>

      <section>
        <OurProcess />
      </section>

      <section>
        <Review/>
      </section>

      <section>
        <Benefits/>
      </section>

      <section>
        <BasementUpgrade />
      </section>

      <section>
        <FAQ />
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

export default BasementRenovationsInToronto;
