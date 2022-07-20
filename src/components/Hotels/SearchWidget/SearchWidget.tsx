import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useSelector, useDispatch } from 'react-redux';

import { RootState, AppDispatch } from '../../../app/store';
import { newSearch } from '../../../features/search/searchSlice';
import { IDateRange, defaultDateRange, IOptions, defaultOptions } from '../../Searchbar';

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
    capitalize
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

const ResetButton = styled.button`
  ${tw`
    w-full
    bg-[#0071c2]
    text-white
    font-semibold
    py-1
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
    rounded-sm
  `}
`;

interface ISearchWidget {
  handleSearch: (destination: string, min: number, max: number) => void;
}

type OptionsName = 'adult' | 'children' | 'room';

const SearchWidget: FC<ISearchWidget> = ({ handleSearch }) => {
  const search = useSelector((state: RootState) => state.search);
  const [destination, setDestination] = useState(search.destination || '');
  const [dateRange, setDateRange] = useState<IDateRange[]>(search?.dateRange || defaultDateRange);
  const [options, setOptions] = useState<IOptions>(search?.options || defaultOptions);
  const handleOptionsChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>, name: OptionsName) => {
      setOptions({
        ...options,
        [name]: parseInt(evt.target.value, 10),
      });
  }, [options]);

  const [minPrice, setMinPrice] = useState(search.min);
  const [maxPrice, setMaxPrice] = useState(search.max);

  const [openDatePicker, setOpenDatePicker] = useState(false);
  const handleOpenDatePicker = useCallback(() => {
    setOpenDatePicker(!openDatePicker);
  }, [openDatePicker]);

  const dispatch = useDispatch<AppDispatch>();
  const handleSearchButtonClick = useCallback(() => {
    dispatch(newSearch({ destination, dateRange, options, min: minPrice, max: maxPrice }));
    handleSearch(destination, minPrice, maxPrice);
  }, [destination, dateRange, options, minPrice, maxPrice]);

  const handleReset = useCallback(() => {
    setDestination('');
    setDateRange(defaultDateRange);
    setOptions(defaultOptions);
    setMinPrice(1);
    setMaxPrice(999);
  }, [defaultDateRange, defaultOptions]);

  return (
    <Container>
      <Title>Search</Title>
      <Item>
        <Label>Destination/property name:</Label>
        <Input
          type="text"
          placeholder="Where are you going?"
          value={destination}
          onChange={(evt) => setDestination(evt.target.value)}
        />
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
            <OptionsInput
              type="number"
              value={minPrice}
              min={1}
              max={999}
              onChange={(evt) => setMinPrice(parseInt(evt.target.value, 10))}
            />
          </OptionsItem>
          <OptionsItem>
            <OptionsLabel>Max price <small>(per night)</small></OptionsLabel>
            <OptionsInput
              type="number"
              value={maxPrice}
              min={1}
              max={999}
              onChange={(evt) => setMaxPrice(parseInt(evt.target.value, 10))}
            />
          </OptionsItem>
          <OptionsItem>
            <OptionsLabel>Adult</OptionsLabel>
            <OptionsInput
              type="number"
              value={options.adult}
              min={1}
              onChange={(evt) => handleOptionsChange(evt, 'adult')}
            />
          </OptionsItem>
          <OptionsItem>
            <OptionsLabel>Children</OptionsLabel>
            <OptionsInput
              type="number"
              value={options.children}
              min={0}
              onChange={(evt) => handleOptionsChange(evt, 'children')}
            />
          </OptionsItem>
          <OptionsItem>
            <OptionsLabel>Room</OptionsLabel>
            <OptionsInput
              type="number"
              value={options.room}
              min={1}
              onChange={(evt) => handleOptionsChange(evt, 'room')}
            />
          </OptionsItem>
        </OptionsContainer>
      </Item>
      <Item>
        <ResetButton type="button" onClick={handleReset}>Reset</ResetButton>
      </Item>
      <Item>
        <SearchButton type="button" onClick={handleSearchButtonClick}>
          Search
        </SearchButton>
      </Item>
    </Container>
  );
};

export default SearchWidget;
