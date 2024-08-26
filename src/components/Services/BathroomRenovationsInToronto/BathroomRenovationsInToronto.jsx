import React from 'react';
import BathroomRenovationsInTorontoBanner from './BathroomRenovationsInTorontoBanner/BathroomRenovationsInTorontoBanner';
import Brand from '../HomeAdditionsInToronto/Brand/Brand';
import AboutUs from './AboutUs/AboutUs';
import ExpertRenovators from './ExpertRenovators/ExpertRenovators';
import BestBathroomRenovation from './BestBathroomRenovation/BestBathroomRenovation';
import TrustUs from './TrustUs/TrustUs';
import ExperiencedServices from './ExperiencedServices/ExperiencedServices';
import RemodelDesign from './RemodelDesign/RemodelDesign';
import Gallery from './Gallery/Gallery';
import HowMuchCost from './HowMuchCost/HowMuchCost';

const BathroomRenovationsInToronto = () => {
    return (
        <div>
            <section>
                <BathroomRenovationsInTorontoBanner/>
            </section>

            <section>
                <Brand />
            </section>

            <section>
                <AboutUs />
            </section>

            <section>
                <ExpertRenovators />
            </section>

            <section>
                <BestBathroomRenovation />
            </section>

            <section>
                <ExperiencedServices />
            </section>

            <section>
                <TrustUs />
            </section>

            <section>
                <RemodelDesign />
            </section>
            
            <section>
                <Gallery />
            </section>


            <section>
                <HowMuchCost />
            </section>

        </div>
    );
};

export default BathroomRenovationsInToronto;