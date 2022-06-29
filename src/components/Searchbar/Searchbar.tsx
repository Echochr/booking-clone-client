import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  ${tw`
    h-14
    bg-white
    border-4
    border-yellow-400
    flex
    justify-around
    items-center
    p-2.5
    rounded-md

    absolute
    bottom--7
    w-full
    max-w-5xl
  `}
`;

const SearchItem = styled.div`
  ${tw`
    flex
    items-center
    gap-3
  `}

  input, span {
    ${tw`
      border-none
      focus:outline-none
      text-gray-500
      cursor-pointer
    `}
  }

  .DateRange {
    ${tw`
      absolute
      top-14
      z-10
    `}
  }
`;

const Icon = styled.div`
  ${tw`
    text-gray-400
  `}
`;

const SearchButton = styled.button`
  ${tw`
    bg-[#0071c2]
    border-none
    font-medium
    py-2
    px-2.5
    cursor-pointer
    rounded-sm
  `}
`;

const OptionsPicker = styled.div`
  ${tw`
    absolute
    top-14
    bg-white
    text-gray-400
    p-2
    rounded-md
    shadow-md
    z-10
  `}
`;

const OptionsItem = styled.div`
  ${tw`
    w-56
    flex
    justify-between
    p-2.5
  `}
`;

const OptionsText = styled.span``;

const OptionsControlGroup = styled.div`
  ${tw`
    flex
    items-center
    gap-4
  `}
`;

const OptionsButton = styled.button`
  border: 1px solid #0071c2;
  color: #0071c2;
  ${tw`
    w-8
    h-8
    bg-white
    cursor-pointer
    rounded-sm

    disabled:bg-gray-200
    disabled:text-gray-400
    disabled:border-gray-400
    disabled:cursor-not-allowed
  `}
`;

const OptionsNumber = styled.span`
  ${tw`
    w-5
    text-center
  `}
`;

export interface IDateRange {
  startDate?: Date;
  endDate?: Date;
  key?: string;
}

export interface IOptions {
  adult: number;
  children: number;
  room: number;
}

type OptionsName = 'adult' | 'children' | 'room';

type Operations = 'inc' | 'dec';

const Searchbar: FC = () => {
  const [destination, setDestination] = useState('');
  const [dateRange, setDateRange] = useState<IDateRange[]>([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }]);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const handleOpenDatePicker = useCallback(() => {
    setOpenDatePicker(!openDatePicker);
    setOpenOptionsPicker(false);
  }, [openDatePicker]);

  const [options, setOptions] = useState<IOptions>({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOptionsChange = useCallback((name: OptionsName, operation: Operations) => {
    if (operation === 'inc') {
      const newValue: number = options[name] += 1;
      setOptions((prev) => ({
        ...prev,
        [name]: newValue,
      }));
    } else if (operation === 'dec') {
      const newValue: number = options[name] -= 1;
      setOptions((prev) => ({
        ...prev,
        [name]: newValue,
      }));
    }
  }, [options]);

  const [openOptionsPicker, setOpenOptionsPicker] = useState(false);
  const handleOpenOptionsPicker = useCallback(() => {
    setOpenOptionsPicker(!openOptionsPicker);
    setOpenDatePicker(false);
  }, [openOptionsPicker]);

  const startDateDisplay = format(dateRange[0].startDate || new Date(), 'dd/MM/yyyy');
  const endDateDisplay = format(dateRange[0].endDate || new Date(), 'dd/MM/yyyy');

  const navigate = useNavigate();
  const handleSearch = useCallback(() => {
    navigate('hotels', { state: { destination, dateRange, options }});
  }, [destination, dateRange, options]);

  return (
    <Container>
      <SearchItem>
        <Icon>
          <FontAwesomeIcon icon={faBed} />
        </Icon>
        <input type="text" placeholder="Where are you going?" onChange={(evt) => setDestination(evt.target.value)} />
      </SearchItem>
      <SearchItem>
        <Icon>
          <FontAwesomeIcon icon={faCalendarDays} />
        </Icon>
        <span onClick={handleOpenDatePicker}>{`${startDateDisplay} to ${endDateDisplay}`}</span>
        {openDatePicker && <DateRange
          editableDateInputs={true}
          onChange={(item) => setDateRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
          minDate={new Date()}
          className="DateRange"
        />}
      </SearchItem>
      <SearchItem>
        <Icon>
          <FontAwesomeIcon icon={faPerson} />
        </Icon>
        <span onClick={handleOpenOptionsPicker}>{`${options.adult} adult・${options.children} children・${options.room} room`}</span>
        {openOptionsPicker && <OptionsPicker>
          <OptionsItem>
            <OptionsText>Adult</OptionsText>
            <OptionsControlGroup>
              <OptionsButton
                onClick={() => handleOptionsChange('adult', 'dec')}
                disabled={options.adult === 1}
              >
                -
              </OptionsButton>
              <OptionsNumber>{`${options.adult}`}</OptionsNumber>
              <OptionsButton onClick={() => handleOptionsChange('adult', 'inc')}>+</OptionsButton>
            </OptionsControlGroup>
          </OptionsItem>
          <OptionsItem>
            <OptionsText>Children</OptionsText>
            <OptionsControlGroup>
              <OptionsButton
                onClick={() => handleOptionsChange('children', 'dec')}
                disabled={options.children === 0}
              >
                -
              </OptionsButton>
              <OptionsNumber>{`${options.children}`}</OptionsNumber>
              <OptionsButton onClick={() => handleOptionsChange('children', 'inc')}>+</OptionsButton>
            </OptionsControlGroup>
          </OptionsItem>
          <OptionsItem>
            <OptionsText>Room</OptionsText>
            <OptionsControlGroup>
              <OptionsButton
                onClick={() => handleOptionsChange('room', 'dec')}
                disabled={options.room === 1}
              >
                -
              </OptionsButton>
              <OptionsNumber>{`${options.room}`}</OptionsNumber>
              <OptionsButton onClick={() => handleOptionsChange('room', 'inc')}>+</OptionsButton>
            </OptionsControlGroup>
          </OptionsItem>
        </OptionsPicker>}
      </SearchItem>
      <SearchItem>
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchItem>
    </Container>
  );
};

export default Searchbar;
