import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import SearchWidget from './SearchWidget';

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
    gap-2
  `}
`;

const WidgetContainer = styled.div`
  ${tw`
    w-[35%]
  `}
`;

const ListingContainer = styled.div`
  ${tw`
    w-[65%]
  `}
`;

const Hotels: FC = () => {
  return (
    <Section>
      <Container>
        <WidgetContainer>
          <SearchWidget />
        </WidgetContainer>
      </Container>
    </Section>
  );
};

export default Hotels;
