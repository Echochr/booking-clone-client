import React from 'react';
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
    h-20

    relative
  `}
`;

const HeaderContainer = styled.div`
  ${tw`
    w-full
    max-w-5xl
    mt-5
    mb-24
  `}
`;

const HeaderList = styled.ul`
  ${tw`
    flex
    items-center
    gap-10
  `}
`;

const ListItem = styled.div`
  ${tw`
    flex
    gap-2
    items-center
    p-3
    rounded-3xl
    cursor-pointer
    hover:border-white
    hover:bg-white/20

    transition
    duration-200
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
      </HeaderContainer>
    </Container>
  );
};

export default Header;
