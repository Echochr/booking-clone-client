import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import SearchWidget from './SearchWidget';
import HotelListings from '../HotelListings';

const Section = styled.section`
  ${tw`
    flex
    justify-center
    mt-6
  `}
`;

const Container = styled.div`
  ${tw`
    w-full
    max-w-5xl
    flex
    gap-4
  `}
`;

const WidgetContainer = styled.div`
  ${tw`
    w-[30%]
  `}
`;

const ListingContainer = styled.div`
  ${tw`
    w-[70%]
  `}
`;

const Hotels: FC = () => {
  return (
    <Section>
      <Container>
        <WidgetContainer>
          <SearchWidget />
        </WidgetContainer>
        <ListingContainer>
          <HotelListings />
        </ListingContainer>
      </Container>
    </Section>
  );
};

export default Hotels;
