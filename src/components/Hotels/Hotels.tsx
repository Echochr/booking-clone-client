import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useQuery } from 'react-query';
import { BeatLoader } from 'react-spinners';
import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';
import SearchWidget from './SearchWidget';
import HotelListings from '../HotelListings';
import { getAllHotels } from '../../services/ApiService';
import capitalize from '../../utils/capitalize';

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

export interface IHotelQuery {
  city: string;
  min: number;
  max: number;
}

const Hotels: FC = () => {
  const search = useSelector((state: RootState) => state.search);
  const [hotelQuery, setHotelQuery] = useState<IHotelQuery>({
    city: capitalize(search?.destination || 'Bali'),
    min: 1,
    max: 999,
  });

  const { data: hotels, isLoading } = useQuery(
    ['hotelsList', hotelQuery],
    () => getAllHotels(hotelQuery),
  );

  const handleSearch = useCallback(async (destination: string, min = 1, max = 999) => {
    setHotelQuery({
      city: capitalize(destination),
      min,
      max,
    });
  }, []);

  return (
    <Section>
      <Container>
        <WidgetContainer>
          <SearchWidget handleSearch={handleSearch} />
        </WidgetContainer>
        <ListingContainer>
          {isLoading && <BeatLoader color="#0071c2" />}
          {hotels && <HotelListings hotels={hotels} />}
          {!isLoading && hotels.length === 0 && <h2>🤯 No hotels found from your search criteria</h2>}
        </ListingContainer>
      </Container>
    </Section>
  );
};

export default Hotels;
