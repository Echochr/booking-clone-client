import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

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

interface IDateRange {
  startDate?: Date;
  endDate?: Date;
  key?: string;
}

const Searchbar: FC = () => {
  const [dateRange, setDateRange] = useState<IDateRange[]>([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }]);
  const [openDatePicker, setOpenDatePicker] = useState<boolean>(false);
  const handleOpenDatePicker = useCallback(() => {
    setOpenDatePicker(!openDatePicker);
  }, [openDatePicker]);

  const startDateDisplay = format(dateRange[0].startDate || new Date(), 'dd/MM/yyyy');
  const endDateDisplay = format(dateRange[0].endDate || new Date(), 'dd/MM/yyyy');

  return (
    <Container>
      <SearchItem>
        <Icon>
          <FontAwesomeIcon icon={faBed} />
        </Icon>
        <input type="text" placeholder="Where are you going?" />
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
        <span>2 adults 2 children 1 room</span>
      </SearchItem>
      <SearchItem>
        <SearchButton>Search</SearchButton>
      </SearchItem>
    </Container>
  );
};

export default Searchbar;
