import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useNavigate } from 'react-router-dom';

import IMAGES from '../../constants/Images';
import { IHotel } from '../../interface/hotels.interface';

const Card = styled.div`
  border: 1px solid;
  ${tw`
    border-gray-200
    p-2.5
    rounded-sm
    flex
    gap-4
  `}
`;

const Image = styled.img`
  ${tw`
    w-auto
    h-52
    rounded-md
  `}
`;

const Information = styled.div`
  ${tw`
    flex
    flex-col
    justify-between
    py-1
    text-xs
  `}
`;

const ExtraInfo = styled.div`
  ${tw`
    w-1/5
    flex
    flex-col
    justify-between
    gap-4
    py-1
  `}
`;

const HotelName = styled.h4`
  ${tw`
    text-xl
    font-bold
    text-[#0071c2]
  `}
`;

const Tag = styled.span`
  ${tw`
    bg-green-600
    text-white
    p-1
    w-max
    rounded-md
  `}
`

const BoldText = styled.span`
  ${tw`
    max-w-[300px]
    font-bold
    truncate
  `}
`;

const GreenBoldText = styled.span`
  ${tw`
    text-green-600
    font-bold
    text-sm
  `}
`;

const GreenText = styled.span`
  ${tw`
    text-green-600
  `}
`;

const Ratings = styled.div`
  ${tw`
    flex
    justify-between
  `}
`;

const Badge = styled.div`
  min-width: 28px;
  min-height: 28px;
  ${tw`
    bg-[#003580]
    text-white
    p-1
    text-sm
    rounded-md
    rounded-bl-none
    flex
    justify-center
  `}
`;

const CTADiv = styled.div`
  ${tw`
    flex
    flex-col
    items-end
    gap-1.5
  `}
`;

const Price = styled.span`
  ${tw`
    text-2xl
  `}
`;

const TOS = styled.span`
  ${tw`
    text-xs
    text-gray-400
  `}
`;

const CTAButton = styled.button`
  ${tw`
    bg-[#0071c2]
    text-white
    w-full
    p-2
    rounded-md
  `}
`;

interface IHotelListingCard {
  hotel: IHotel;
}

const HotelListingCard: FC<IHotelListingCard> = ({ hotel }) => {
  const navigate = useNavigate();
  const handleGotoDetailPage = useCallback((hotelId: string) => {
    navigate(`../hotel/${hotelId}`);
  }, []);

  return (
    <Card>
      <Image src={IMAGES.HotelListingCardDefault} />
      <Information>
        <HotelName>{hotel.name}</HotelName>
        <span>{(hotel.distance / 1000).toFixed(1)}km from center</span>
        <Tag>Free airport taxi</Tag>
        <BoldText>{hotel.description}</BoldText>
        <span>Entire studio・1 bath room・21m<sup>2</sup> 1 full bed</span>
        <GreenBoldText>Free cancellation</GreenBoldText>
        <GreenText>You can cancel later, so lock in this great price today!</GreenText>
      </Information>
      <ExtraInfo>
        <Ratings>
          <span>Excellent</span>
          <Badge>{hotel.rating}</Badge>
        </Ratings>
        <CTADiv>
          <Price>${hotel.cheapestPrice}</Price>
          <TOS>includes taxes and fees</TOS>
          <CTAButton onClick={() => handleGotoDetailPage(hotel._id)}>See availability</CTAButton>
        </CTADiv>
      </ExtraInfo>
    </Card>
  );
};

export default HotelListingCard;
