import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import HotelListingCard from '../HotelListingCard';

const Container = styled.div`
  ${tw`
    flex
    flex-col
    gap-4
  `}
`;

const HotelListings: FC = () => {
  return (
    <Container>
      <HotelListingCard />
      <HotelListingCard />
      <HotelListingCard />
    </Container>
  );
};

export default HotelListings;
