import React from 'react';
import DeckBuilderInTorontoBanner from './DeckBuilderInTorontoBanner/DeckBuilderInTorontoBanner';
import Brand from '../HomeAdditionsInToronto/Brand/Brand';
import Gallery from '../HomeAdditionsInToronto/Gallery/Gallery';
import Review from '../HomeAdditionsInToronto/Review/Review';
import FAQ from './FAQ/FAQ';
import Areas from '../HomeAdditionsInToronto/Areas/Areas';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import ContactUs from '../HomeAdditionsInToronto/ContactUs/ContactUs';
import Location from '../HomeAdditionsInToronto/Location/Location';
import AboutUs from './AboutUs/AboutUs';
import Cost from './Cost/Cost';
import TrustUs from './TrustUs/TrustUs';
import BestQualityMaterials from './BestQualityMaterials/BestQualityMaterials';
import Company from './Company/Company';
import TopRatedDeckBuilder from './TopRatedDeckBuilder/TopRatedDeckBuilder';
import CustomDeckBuilder from './CustomDeckBuilder/CustomDeckBuilder';
import OurDeckBuilderOffer from './OurDeckBuilderOffer/OurDeckBuilderOffer';
import WorkingProcess from './WorkingProcess/WorkingProcess';
import Benefits from './Benefits/Benefits';

const DeckBuilderInToronto = () => {
    return (
        <div>

            <section>
                <DeckBuilderInTorontoBanner/>
            </section>

            <section>
            <Brand />
            </section>

            <section>
                <AboutUs/>
            </section>

            <section>
                <Company/>
            </section>

            <section>
                <OurDeckBuilderOffer/>
            </section>

            <section>
                <CustomDeckBuilder/>
            </section>

            <section>
                <TopRatedDeckBuilder/>
            </section>
            
            <section>
            <Gallery />
            </section>

            <section>
                <BestQualityMaterials/>
            </section>

            <section>
                <Cost/>
            </section>

            <section>
                <WorkingProcess/>
            </section>

            <section>
                <Benefits/>
            </section>

            <section>
            <Review/>
            </section>

            <section>
                <TrustUs/>
            </section>
            
            <section>
            <WhyChooseUs/>
            </section>

            <section>
                <FAQ/>
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

export default DeckBuilderInToronto;