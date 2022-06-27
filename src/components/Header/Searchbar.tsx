import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';

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

const Searchbar: FC = () => {
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
        <span>date to date</span>
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
