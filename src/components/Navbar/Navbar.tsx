import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.nav`
  background-color: #003580;
  ${tw`
    h-14
    flex
    justify-center
  `}
`;

const SubContainer = styled.div`
  ${tw`
    w-full
    max-w-screen-lg
    text-white
    flex
    justify-between
    items-center
  `}
`;

const Logo = styled.div`
  ${tw`
    font-bold
    text-2xl
  `}
`;

const NavItems = styled.div`
  ${tw`
    flex
    gap-4
  `}
`;

const NavButton = styled.button`
  color: #003580;
  ${tw`
    border-none
    py-1
    px-2.5
    cursor-pointer
    bg-white
    rounded-md
  `}
`;

const Navbar: FC = () => {
  return (
    <Container>
      <SubContainer>
        <Logo>Booking</Logo>
        <NavItems>
          <NavButton>Register</NavButton>
          <NavButton>Sign In</NavButton>
        </NavItems>
      </SubContainer>
    </Container>
  );
};

export default Navbar;
