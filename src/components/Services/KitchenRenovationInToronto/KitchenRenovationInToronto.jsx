import React from "react";
import KitchenRenovationInTorontoBanner from "./KitchenRenovationInTorontoBanner/KitchenRenovationInTorontoBanner";
import Brand from "../HomeAdditionsInToronto/Brand/Brand";
import AboutUs from "./AboutUs/AboutUs";
import BestKitchenRenovation from "./BestKitchenRenovation/BestKitchenRenovation";
import ExpertKitchenRenovation from "./ExpertKitchenRenovation/ExpertKitchenRenovation";
import DesignGeneralContractor from "./DesignGeneralContractor/DesignGeneralContractor";
import RenovationConstruction from "./RenovationConstruction/RenovationConstruction";
import Gallery from "../HomeAdditionsInToronto/Gallery/Gallery";
import AffordableCompany from "./AffordableCompany/AffordableCompany";
import TrustUsCommonDesign from "./TrustUsCommonDesign/TrustUsCommonDesign";
import StepOfServices from "./StepOfServices/StepOfServices";
import Review from "../HomeAdditionsInToronto/Review/Review";
import HowMuchCost from "./HowMuchCost/HowMuchCost";
import Benefits from "./Benefits/Benefits";

const KitchenRenovationInToronto = () => {
  return (
    <div>
      <section>
        <KitchenRenovationInTorontoBanner />
      </section>

      <section>
        <Brand />
      </section>

      <section>
        <AboutUs />
      </section>

      <section>
        <BestKitchenRenovation />
      </section>

      <section>
        <AffordableCompany />
      </section>

      <section>
        <ExpertKitchenRenovation />
      </section>

      <section>
        <DesignGeneralContractor />
      </section>

      <section>
        <TrustUsCommonDesign />
      </section>

      <section>
        <StepOfServices />
      </section>

      <section>
        <Gallery />
      </section>

      <section>
        <RenovationConstruction />
      </section>

      <section>
        <HowMuchCost />
      </section>

      <section>
        <Review />
      </section>

      <section>
        <Benefits />
      </section>
      
    </div>
  );
};

export default KitchenRenovationInToronto;
