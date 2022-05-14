import React from 'react';

import {
  FaHandshake,
  FaFlagCheckered,
  FaStar,
  FaCoins,
} from 'react-icons/fa';

import {
  ResultsContainer,
  ContentResults,
  Infos,
  InfoItems,
  InfoImg,
  InfoP,
} from './ResultsSectionElements';

function ResultsSection() {
  return (
    <ResultsContainer>
      <ContentResults>
        <Infos>
          <InfoItems>
            <InfoImg>
              <FaHandshake />
            </InfoImg>

            <InfoP>
              Alcance mais
              <br />
              clientes
            </InfoP>
          </InfoItems>
          <InfoItems>
            <InfoImg>
              <FaFlagCheckered />
            </InfoImg>

            <InfoP>
              Esteja à frente de seus
              <br />
              concorrentes
            </InfoP>
          </InfoItems>
          <InfoItems>
            <InfoImg>
              <FaStar />
            </InfoImg>

            <InfoP>
              Seja destaque em sua
              <br />
              cidade
            </InfoP>
          </InfoItems>
          <InfoItems>
            <InfoImg>
              <FaCoins />
            </InfoImg>

            <InfoP>
              Alavanque seus
              <br />
              lucros
            </InfoP>
          </InfoItems>
        </Infos>
      </ContentResults>
    </ResultsContainer>
  );
};

export default ResultsSection;
