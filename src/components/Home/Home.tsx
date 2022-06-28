import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Hero from '../Hero';
import City from '../City';
import Properties from '../Properties';

const ContentContainer = styled.div`
  ${tw`
    flex
    justify-center
  `}
`;

const ContentSubContainer = styled.div`
  ${tw`
    mt-14
    w-full
    max-w-5xl

    flex
    flex-col
    gap-4
  `}
`;

const Home: FC = () => {
  return (
    <>
      <Hero />
      <ContentContainer>
        <ContentSubContainer>
          <Properties />
          <City />
        </ContentSubContainer>
      </ContentContainer>
    </>
  );
};

export default Home;
