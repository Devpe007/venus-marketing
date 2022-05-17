import React from 'react';

import {
  ValuesCompanyContainer,
  ValuesCompanyContent,
  ValuesCompanyItems,
  ValuesCompanyImg,
  Img,
  ValuesCompanyH1,
  ValuesCompanyP,
} from './ValuesCompanyElements';

import misson from '../../images/elements/mission.jpg';
import values from '../../images/elements/values.jpg';
import vision from '../../images/elements/vision.jpg';

function ValuesCompany() {
  return (
    <ValuesCompanyContainer>
      <ValuesCompanyContent>
        <ValuesCompanyItems>
          <ValuesCompanyImg>
            <Img src={misson} alt="mission" />
          </ValuesCompanyImg>

          <ValuesCompanyH1>
            MISSÃO
          </ValuesCompanyH1>

          <ValuesCompanyP>
            Transformar a perspectiva de pequenos e grandes negócios para o mundo digital, ajuda-los a alcançar seus objetivos, com isso, trazer grandes resultados.
          </ValuesCompanyP>
        </ValuesCompanyItems>
        <ValuesCompanyItems>
          <ValuesCompanyImg>
            <Img src={vision} alt="mission" />
          </ValuesCompanyImg>

          <ValuesCompanyH1>
            VISÃO
          </ValuesCompanyH1>

          <ValuesCompanyP>
            Ser marca líder no mercado, mostrar a diferença em resultados, trazer o mundo digital e suas possibilidades infinitas para os que procuram ser a diferença entre tantos no mercado.
          </ValuesCompanyP>
        </ValuesCompanyItems>
        <ValuesCompanyItems>
          <ValuesCompanyImg>
            <Img src={values} alt="mission" />
          </ValuesCompanyImg>

          <ValuesCompanyH1>
            VALORES
          </ValuesCompanyH1>

          <ValuesCompanyP>
            Exclusividade, criatividade, estratégia, equipe especializada em trazer resultados que realmente vão fazer a diferença no seu negócio com projetos extraordinários.
          </ValuesCompanyP>
        </ValuesCompanyItems>
      </ValuesCompanyContent>
    </ValuesCompanyContainer>
  );
};

export default ValuesCompany;
