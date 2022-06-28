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

const Title = styled.h3`
  ${tw`
    font-bold
    mt-2
  `}
`;

const Text = styled.h5`
  ${tw`
    text-sm
    text-gray-500
  `}
`;

const Properties: FC = () => {
  return (
    <>
      <Heading>Browse by properties type</Heading>
      <ItemsContainer>
      <Item>
        <Image src={IMAGES.Hotel} />
        <Title>Hotels</Title>
        <Text>870 hotels</Text>
      </Item>
      <Item>
        <Image src={IMAGES.Apartment} />
        <Title>Apartments</Title>
        <Text>236 apartments</Text>
      </Item>
      <Item>
        <Image src={IMAGES.Resort} />
        <Title>Resort</Title>
        <Text>28 resorts</Text>
      </Item>
      <Item>
        <Image src={IMAGES.Villa} />
        <Title>Villas</Title>
        <Text>128 villas</Text>
      </Item>
      </ItemsContainer>
    </>
  );
};

export default Properties;
