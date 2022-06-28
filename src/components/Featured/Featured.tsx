import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import IMAGES from '../../constants/Images';

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

const Featured: FC = () => {
  return (
    <>
      <Heading>Homes guests love</Heading>
      <ItemsContainer>
        <Item>
          <Image src={IMAGES.BarcelonaProp1} />
          <Name>Aparthotel Stare Miasto</Name>
          <City>Barcelona</City>
          <Price>Starting from $240</Price>
          <Ratings>
            <Badge>8.8</Badge>
            <span>Excellent</span>
            <span>2,574 reviews</span>
          </Ratings>
        </Item>
        <Item>
          <Image src={IMAGES.BaliProp1} />
          <Name>Luxury Apartments Klara</Name>
          <City>Bali</City>
          <Price>Starting from $580</Price>
          <Ratings>
            <Badge>9.6</Badge>
            <span>Exceptional</span>
            <span>430 reviews</span>
          </Ratings>
        </Item>
        <Item>
          <Image src={IMAGES.LondonProp1} />
          <Name>The Apartments by The Sloane Club</Name>
          <City>London</City>
          <Price>Starting from $335</Price>
          <Ratings>
            <Badge>9.3</Badge>
            <span>Wonderful</span>
            <span>127 reviews</span>
          </Ratings>
        </Item>
        <Item>
          <Image src={IMAGES.ParisProp1} />
          <Name>LivinParis - Luxury Residence</Name>
          <City>Paris</City>
          <Price>Starting from $420</Price>
          <Ratings>
            <Badge>7.6</Badge>
            <span>Good</span>
            <span>102 reviews</span>
          </Ratings>
        </Item>
      </ItemsContainer>
    </>
  );
};

export default Featured;
