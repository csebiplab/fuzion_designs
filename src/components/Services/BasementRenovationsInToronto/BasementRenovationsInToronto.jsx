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
        <Gallery />
      </section>

      <section>
        <WhyChooseUs />
      </section>

      <section>
        <FAQ />
      </section>

      <section>
        <Review/>
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
