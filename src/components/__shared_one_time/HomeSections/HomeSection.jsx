import React from 'react';
import "./HomeSection.css"
import HomeBanner from './HomeBanner/HomeBanner';
import Location from '@/components/Services/HomeAdditionsInToronto/Location/Location';
import HomeBrand from './HomeBrand/HomeBrand';
import OurServices from './OurServices/OurServices';
import NeedHelpContactUs from './NeedHelpContactUs/NeedHelpContactUs';
import AreYouReady from './AreYouReady/AreYouReady';
import ReadOurReview from './ReadOurReview/ReadOurReview';
import GetInstantQuote from './GetInstantQuote/GetInstantQuote';


const HomeSection = () => {
    return (
        <div>

            <section>
                <HomeBanner/>
            </section>

            <section>
                <HomeBrand/>
            </section>

            <section>
                <AreYouReady/>
            </section>

            <section>
                <OurServices/>
            </section>

            <section>
                <NeedHelpContactUs/>
            </section>

            <section>
            <ReadOurReview/>
            </section>
                
            <section className='bg-primary'>
                <GetInstantQuote/>
            </section>

            <section className="bg-primary">
            <Location />
            </section>
            
        </div>
    );
};

export default HomeSection;