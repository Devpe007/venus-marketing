import React from 'react';

import {
  AboutUsContainer,
  AboutUsSection,
  AboutUsContent,
  AboutUsH1,
  AboutUsP,
} from './AboutUsElements';

function AboutUs() {
  return (
    <AboutUsContainer>
      <AboutUsSection>
        <AboutUsContent>
          <AboutUsH1>Sobre nós</AboutUsH1>
          <AboutUsP>
            A Venus é uma agência especializada em marketing digital e design, ajudando pequenos e grandes negócios, trazendo inovação e resultados, garantindo reconhecimento, credibilidade, aumento na taxa de clientes, autoridade, assim, transformando e agregando valor para muitos negócios.
          </AboutUsP>
        </AboutUsContent>
      </AboutUsSection>
    </AboutUsContainer>
  );
};

export default AboutUs;
