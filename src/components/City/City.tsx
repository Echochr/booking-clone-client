import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Barcelona from '../../public/images/barcelona.jpeg';
import London from '../../public/images/london.jpeg';
import Bali from '../../public/images/bali.jpeg';

const Container = styled.div`
  ${tw`
    flex
    justify-between
    gap-4
  `}
`;

const Item = styled.div`
  ${tw`
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
  return (
    <Container>
      <Item>
        <Image src={Barcelona} />
        <Title>Barcelona</Title>
        <Text>23 properties</Text>
      </Item>
      <Item>
        <Image src={London} />
        <Title>London</Title>
        <Text>15 properties</Text>
      </Item>
      <Item>
        <Image src={Bali} />
        <Title>Bali</Title>
        <Text>8 properties</Text>
      </Item>
    </Container>
  );
};

export default City;
