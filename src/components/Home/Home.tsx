import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Hero from '../Hero';
import City from '../City';

const ContentContainer = styled.div`
  ${tw`
    flex
    justify-center
  `}
`;

const ContentSubContainer = styled.div`
  ${tw`
    mt-20
    w-full
    max-w-5xl
  `}
`;

const Home: FC = () => {
  return (
    <>
      <Hero />
      <ContentContainer>
        <ContentSubContainer>
          <City />
        </ContentSubContainer>
      </ContentContainer>
    </>
  );
};

export default Home;
