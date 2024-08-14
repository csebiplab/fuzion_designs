import React from 'react';
import DeckBuilderInTorontoBanner from './DeckBuilderInTorontoBanner/DeckBuilderInTorontoBanner';
import Brand from '../HomeAdditionsInToronto/Brand/Brand';
import Gallery from '../HomeAdditionsInToronto/Gallery/Gallery';
import Review from '../HomeAdditionsInToronto/Review/Review';
import FAQ from './FAQ/FAQ';
import Areas from '../HomeAdditionsInToronto/Areas/Areas';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

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

            </section>

            <section>

            </section>

            <section>

            </section>

            <section>
            <Gallery />
            </section>
            <section>

            </section>

            <section>

            </section>

            <section>
            <Review/>
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

        </div>
    );
};

export default DeckBuilderInToronto;