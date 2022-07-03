import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import HotelListingCard from '../HotelListingCard';
import { IHotel } from '../../interface/hotels.interface';

const Container = styled.div`
  ${tw`
    flex
    flex-col
    gap-4
  `}
`;

interface IHotelListingsProps {
  hotels?: IHotel[];
}

const HotelListings: FC<IHotelListingsProps> = ({ hotels }) => {
  return (
    <Container>
      {hotels?.map((hotel: IHotel) => (
        <HotelListingCard
          key={hotel._id}
          hotel={hotel}
        />
      ))}
    </Container>
  );
};

export default HotelListings;
