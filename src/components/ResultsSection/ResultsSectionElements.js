import styled from 'styled-components';

export const ResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 100px;
  padding-right: 100px;

  background-image: url('https://venusmarketing.com.br/wp-content/uploads/2022/04/walpaper-venus-2.png');
  background-position: center center;
`;

export const ContentResults = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Infos = styled.ul`
  display: flex;

  margin: 0;
  margin-right: 100px;

  list-style: none;
`;

export const InfoItems = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 150px;
  margin-bottom: 150px;
  margin-left: 100px;

  text-align: center;
`;

export const InfoImg = styled.div`
  svg {
    font-size: 3.5rem;

    color: #fff;
  }
`;

export const InfoP = styled.p`
  font-size: 1.2rem;

  color: #fff;
`;
