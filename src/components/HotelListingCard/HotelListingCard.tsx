import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import IMAGES from '../../constants/Images';

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
    font-bold
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
  ${tw`
    bg-[#003580]
    text-white
    p-1
    text-sm
    rounded-md
    rounded-bl-none
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

const HotelListingCard: FC = () => {
  return <Card>
    <Image src={IMAGES.HotelListingCardDefault} />
    <Information>
      <HotelName>Hotel Tokyo Marunouchi</HotelName>
      <span>2km from center</span>
      <Tag>Free airport taxi</Tag>
      <BoldText>Studio Apartment with Air conditioning</BoldText>
      <span>Entire studio・1 bath room・21m<sup>2</sup> 1 full bed</span>
      <GreenBoldText>Free cancellation</GreenBoldText>
      <GreenText>You can cancel later, so lock in this great price today!</GreenText>
    </Information>
    <ExtraInfo>
      <Ratings>
        <span>Excellent</span>
        <Badge>8.9</Badge>
      </Ratings>
      <CTADiv>
        <Price>$320</Price>
        <TOS>includes taxes and fees</TOS>
        <CTAButton>See availability</CTAButton>
      </CTADiv>
    </ExtraInfo>
  </Card>;
};

export default HotelListingCard;
