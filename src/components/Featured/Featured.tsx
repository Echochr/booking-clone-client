import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useQuery } from 'react-query';

import IMAGES from '../../constants/Images';
import { IHotel } from '../../interface/hotels.interface';
import { getAllFeaturedHotels } from '../../services/ApiService';

const Heading = styled.h4`
  ${tw`
    font-bold
    text-xl
  `}
`;

const ItemsContainer = styled.div`
  ${tw`
    flex
    gap-4
    justify-between
    mb-6
  `}
`;

const Item = styled.div`
  ${tw`
    cursor-pointer
    relative
  `}
`;

const Image = styled.img`
  ${tw`
    h-60
    rounded-lg
  `}
`;

const Name = styled.p`
  ${tw`
    mt-2
    text-sm
    text-gray-600
  `}
`;

const City = styled.p`
  ${tw`
    text-sm
    text-gray-600
  `}
`;

const Price = styled.p`
  ${tw`
    mt-1
    font-bold
  `}
`;

const Ratings = styled.div`
  ${tw`
    mt-1
    flex
    gap-4
    items-center
    text-sm
    text-gray-500
  `}
`;

const Badge = styled.div`
  ${tw`
    bg-[#003580]
    text-white
    p-1
    text-sm
    rounded-md
    rounded-bl-none
  `}
`;

const RatingsLookup = (rating: number | undefined) => {
  if (rating === undefined)
    return 'Good';
  if (rating >= 9.5)
    return 'Exceptional';
  else if (rating >= 9.0)
    return 'Wonderful';
  else if (rating >= 8.0)
    return 'Excellent';
  else
    return 'Good';
}

const Featured: FC = () => {
  const { data: featured } = useQuery('featuredHotels', getAllFeaturedHotels);
  const imgList = [IMAGES.BaliProp1, IMAGES.BarcelonaProp1, IMAGES.LondonProp1, IMAGES.ParisProp1];

  return (
    <>
      <Heading>Homes guests love</Heading>
      <ItemsContainer>
        {featured?.map((hotel: IHotel, idx: number) => (
          <Item key={hotel._id}>
            <Image src={imgList[idx]} />
            <Name>{hotel.name}</Name>
            <City>{hotel.city}</City>
            <Price>Starting from ${hotel.cheapestPrice}</Price>
            <Ratings>
              <Badge>{hotel.rating}</Badge>
              <span>{RatingsLookup(hotel.rating)}</span>
              <span>2,574 reviews</span>
            </Ratings>
          </Item>
        ))}
      </ItemsContainer>
    </>
  );
};

export default Featured;
