import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useQuery } from 'react-query';
import { BeatLoader } from 'react-spinners';

import IMAGES from '../../constants/Images';
import { getPropertyCountByType } from '../../services/ApiService';

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
    lowercase
  `}
`;

interface IPropCountByType {
  type: 'Hotel' | 'Apartment' | 'Resort' | 'Villas';
  count: number;
}

const Properties: FC = () => {
  const { data, isLoading } = useQuery('propCountByType', getPropertyCountByType);

  return (
    <>
      <Heading>Browse by properties type</Heading>
      <ItemsContainer>
      {isLoading && <BeatLoader color="#0071c2" />}
      {data?.map(({ type, count }: IPropCountByType, idx: number) => (
        <Item key={idx}>
          <Image src={IMAGES[type]} />
          <Title>{type}</Title>
          <Text>{count} {type}</Text>
        </Item>
      ))}
      </ItemsContainer>
    </>
  );
};

export default Properties;
