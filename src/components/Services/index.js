import React from "react";
import Icon1 from "../../images/svg-5.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-4.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Amazing Support</ServicesH2>
          <ServicesP>
            On-demand, online tutoring and drop-off review with 250+ subjects
            available
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Extensive Data</ServicesH2>
          <ServicesP>
            Real-time analytics with insightful, actionable information
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Expert Tutors</ServicesH2>
          <ServicesP>
            3,000+ highly qualified experts with rigorous screening and ongoing
            development
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
