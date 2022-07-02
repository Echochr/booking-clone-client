import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useQuery } from 'react-query';

import IMAGES from '../../constants/Images';
import { getPropertyCountByCity } from '../../services/ApiService';

const Container = styled.div`
  ${tw`
    flex
    justify-between
    gap-4
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
  width: 340px;
  height: 240px;
  ${tw`
    rounded-lg
  `}
`;

const Title = styled.h3`
  ${tw`
    text-white
    font-bold
    text-2xl

    absolute
    bottom-8
    left-4
  `}
`;

const Text = styled.h5`
  ${tw`
    text-white
    font-bold

    absolute
    bottom-2.5
    left-4
  `}
`;

const City: FC = () => {
  const { data, isLoading }= useQuery('propertyCountByCity', getPropertyCountByCity);

  return (
    <Container>
      <Item>
        <Image src={IMAGES.Barcelona} />
        <Title>Barcelona</Title>
        <Text>{isLoading ? 'Loading...' : `${data[0]} properties`}</Text>
      </Item>
      <Item>
        <Image src={IMAGES.London} />
        <Title>London</Title>
        <Text>{isLoading ? 'Loading...' : `${data[1]} properties`}</Text>
      </Item>
      <Item>
        <Image src={IMAGES.Bali} />
        <Title>Bali</Title>
        <Text>{isLoading ? 'Loading...' : `${data[2]} properties`}</Text>
      </Item>
    </Container>
  );
};

export default City;
