import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import SITEMAP from '../../constants/Sitemap';

const Section = styled.section`
  ${tw`
    flex
    justify-center
    py-4
  `}
`;

const Container = styled.div`
  ${tw`
    w-full
    max-w-5xl
    text-[#0071c2]
    text-sm
  `}
`;

const Columns = styled.div`
  ${tw`
    flex
    justify-between
    gap-4
    pb-4
    font-medium
  `}
`;

const Column = styled.div`
  ${tw`
    flex
    flex-col
    gap-1.5
  `}

  span {
    ${tw`
      cursor-pointer
    `}
  }
`;

const Statement = styled.span`
  ${tw`
    text-black
    text-xs
  `}
`;

const Sitemap: FC = () => {
  return (
    <Section>
      <Container>
        <Columns>
          <Column>
            {SITEMAP.column1.map((item, idx) => <span key={idx}>{item}</span>)}
          </Column>
          <Column>
            {SITEMAP.column2.map((item, idx) => <span key={idx}>{item}</span>)}
          </Column>
          <Column>
            {SITEMAP.column3.map((item, idx) => <span key={idx}>{item}</span>)}
          </Column>
          <Column>
            {SITEMAP.column4.map((item, idx) => <span key={idx}>{item}</span>)}
          </Column>
          <Column>
            {SITEMAP.column5.map((item, idx) => <span key={idx}>{item}</span>)}
          </Column>
        </Columns>
        <Statement>Copyright &copy; 1996-2022 Booking&trade;. All rights reserved.</Statement>
      </Container>
    </Section>
  );
};

export default Sitemap;
