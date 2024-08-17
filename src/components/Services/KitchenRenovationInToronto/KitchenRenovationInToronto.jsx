import React from 'react';
import KitchenRenovationInTorontoBanner from './KitchenRenovationInTorontoBanner/KitchenRenovationInTorontoBanner';
import Brand from '../HomeAdditionsInToronto/Brand/Brand';
import AboutUs from './AboutUs/AboutUs';
import BestKitchenRenovation from './BestKitchenRenovation/BestKitchenRenovation';
import ExpertKitchenRenovation from './ExpertKitchenRenovation/ExpertKitchenRenovation';
import DesignGeneralContractor from './DesignGeneralContractor/DesignGeneralContractor';
import RenovationConstruction from './RenovationConstruction/RenovationConstruction';
import Gallery from '../HomeAdditionsInToronto/Gallery/Gallery';

const KitchenRenovationInToronto = () => {
    return (
        <div>
            <section>
                <KitchenRenovationInTorontoBanner/>
            </section>

            <section>
            <Brand />
            </section>

            <section>
                <AboutUs/>
            </section>

            <section>
                <BestKitchenRenovation/>
            </section>

            <section>
                <ExpertKitchenRenovation/>
            </section>

            <section>
                <DesignGeneralContractor/>
            </section>





            <section>
            <Gallery />
            </section>

            <section>
            <RenovationConstruction />
            </section>
        </div>
    );
};

export default KitchenRenovationInToronto;