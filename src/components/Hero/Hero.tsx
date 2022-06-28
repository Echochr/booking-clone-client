import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Searchbar from '../Searchbar';

const Container = styled.div`
  background-color: #003580;
  ${tw`
    text-white
    flex
    justify-center

    relative
  `}
`;

const SubContainer = styled.div`
  ${tw`
    w-full
    max-w-5xl
    mb-24
  `}
`;

const Title = styled.h1`
  ${tw`
    font-bold
    text-3xl
    mt-4
  `}
`;

const Slogan = styled.p`
  ${tw`
    py-5
  `}
`;

const CTAButton = styled.button`
  ${tw`
    bg-[#0071c2]
    border-none
    font-medium
    p-2.5
    cursor-pointer
    rounded-sm
  `}
`;

const Hero: FC = () => {
  return (
    <Container>
      <SubContainer>
        <Title>A lifetime of discounts? It&apos;s Genius.</Title>
        <Slogan>
          Get rewarded for your travels - unlock instant savings of 10% or more with a free Booking
          account
        </Slogan>
        <CTAButton>Sign in / Register</CTAButton>
        <Searchbar />
      </SubContainer>
    </Container>
  );
};

export default Hero;
