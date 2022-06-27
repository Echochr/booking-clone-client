import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCar, faMountainCity, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  background-color: #003580;
  ${tw`
    text-white
    flex
    justify-center
  `}
`;

const HeaderContainer = styled.div`
  ${tw`
    w-full
    max-w-screen-lg
    mt-5
    mb-24
  `}
`;

const HeaderList = styled.ul`
  ${tw`
    flex
    gap-10
  `}
`;

const ListItem = styled.div`
  :first-child {
    ${tw`
      border-white
      border-[1px]
      rounded-3xl
      p-2.5
    `}
  }
  ${tw`
    flex
    gap-2
    items-center
  `}
`;

const Title = styled.h1`
  ${tw`
    font-bold
    text-3xl
    mt-10
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

const Header: FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderList>
          <ListItem>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faMountainCity} />
            <span>Attractions</span>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </ListItem>
        </HeaderList>
        <Title>A lifetime of discounts? It's Genius.</Title>
        <Slogan>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free Booking account
        </Slogan>
        <CTAButton>Sign in / Register</CTAButton>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
