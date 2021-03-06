import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';
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
    py-2.5
    px-4
    cursor-pointer
    rounded-sm
  `}
`;

const Hero: FC = () => {
  const { isSignedIn } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  return (
    <Container>
      <SubContainer>
        <Title>A lifetime of discounts? It&apos;s Genius.</Title>
        <Slogan>
          Get rewarded for your travels - unlock instant savings of 10% or more with a free Booking
          account
        </Slogan>
        {!isSignedIn && <CTAButton onClick={() => navigate('/signin')}>Sign in / Register</CTAButton>}
        <Searchbar />
      </SubContainer>
    </Container>
  );
};

export default Hero;
