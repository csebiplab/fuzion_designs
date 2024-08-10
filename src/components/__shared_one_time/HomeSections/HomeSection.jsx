import React from 'react';
import "./HomeSection.css"
import HomeBanner from './HomeBanner/HomeBanner';
import Location from '@/components/Services/HomeAdditionsInToronto/Location/Location';
import HomeBrand from './HomeBrand/HomeBrand';
import OurServices from './OurServices/OurServices';


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

            </section>

            <section>
                <OurServices/>
            </section>

            <section>
            </section>
            
            <section>

            </section>

            <section>
            </section>

            <section>
            </section>

            <section>
            <Location />
            </section>
            
        </div>
    );
};

export default HomeSection;