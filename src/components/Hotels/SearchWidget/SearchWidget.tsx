import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { IDateRange, defaultDateRange, IOptions, defaultOptions } from '../../Searchbar';
import capitalize from '../../../utils/capitalize';

const Container = styled.div`
  ${tw`
    bg-[#febb02]
    rounded-[3px]
    p-4
    flex
    flex-col
    gap-4
  `}
`;

const Title = styled.h3`
  ${tw`
    font-medium
    text-xl
  `}
`;

const Item = styled.div`
  ${tw`
    flex
    flex-col
    relative
  `}
  }

  .DateRange {
    ${tw`
      absolute
      top-16
      z-10
    `}
  }
`;

const Label = styled.span`
  ${tw`
    text-sm
  `}
`;

const Input = styled.input`
  ${tw`
    py-2
    px-4
    rounded-sm
    text-gray-600
  `}
`;

const Span = styled.span`
  ${tw`
    py-2
    px-4
    bg-white
    text-gray-600
    cursor-pointer
  `}
`;

const OptionsContainer = styled.div`
  ${tw`
    p-2
    flex
    flex-col
    gap-3
  `}
`;

const OptionsItem = styled.div`
  ${tw`
    flex
    justify-between
    items-center
    text-gray-600
  `}
`;

const OptionsLabel = styled.span``;

const OptionsInput = styled.input`
  ${tw`
    w-20
    h-8
    px-2
    rounded-sm
  `}
`;

const SearchButton = styled.button`
  ${tw`
    w-full
    bg-[#0071c2]
    text-white
    font-semibold
    py-2.5
    mt-4
    rounded-sm

  `}
`;

const SearchWidget: FC = () => {
  const { state }: any = useLocation();
  const [destination, setDestination] = useState(state?.destination || '');
  const [dateRange, setDateRange] = useState<IDateRange[]>(state?.dateRange || defaultDateRange);
  const [options, setOptions] = useState<IOptions>(state?.options || defaultOptions);

  const [openDatePicker, setOpenDatePicker] = useState(false);
  const handleOpenDatePicker = useCallback(() => {
    setOpenDatePicker(!openDatePicker);
  }, [openDatePicker]);

  return (
    <Container>
      <Title>Search</Title>
      <Item>
        <Label>Destination/property name:</Label>
        <Input type="text" placeholder="Where are you going?" defaultValue={capitalize(destination)} />
      </Item>
      <Item>
        <Label>Check-in date</Label>
        <Span onClick={handleOpenDatePicker}>
          {format(dateRange[0]?.startDate || new Date(), 'dd/MM/yyyy')} to{' '}
          {format(dateRange[0]?.endDate || new Date(), 'dd/MM/yyyy')}
        </Span>
        {openDatePicker && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDateRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
            minDate={new Date()}
            className="DateRange"
          />
        )}
      </Item>
      <Item>
        <Label>Options</Label>
        <OptionsContainer>
          <OptionsItem>
            <OptionsLabel>Min price <small>(per night)</small></OptionsLabel>
            <OptionsInput type="number" />
          </OptionsItem>
          <OptionsItem>
            <OptionsLabel>Max price <small>(per night)</small></OptionsLabel>
            <OptionsInput type="number" />
          </OptionsItem>
          <OptionsItem>
            <OptionsLabel>Adult</OptionsLabel>
            <OptionsInput type="number" defaultValue={options.adult} min={1} />
          </OptionsItem>
          <OptionsItem>
            <OptionsLabel>Children</OptionsLabel>
            <OptionsInput type="number" defaultValue={options.children} min={0} />
          </OptionsItem>
          <OptionsItem>
            <OptionsLabel>Room</OptionsLabel>
            <OptionsInput type="number" defaultValue={options.room} min={1} />
          </OptionsItem>
        </OptionsContainer>
      </Item>
      <Item>
        <SearchButton>Search</SearchButton>
      </Item>
    </Container>
  );
};

export default SearchWidget;
