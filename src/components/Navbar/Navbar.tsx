import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { AppDispatch, RootState } from '../../app/store';
import { signout } from '../../features/auth/authSlice';

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
    cursor-pointer
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
  const navigate = useNavigate();
  const { isSignedIn } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();
  const handleSignout = useCallback(async () => {
    await dispatch(signout());
    toast.info('You have signed out.', { position: 'bottom-right' });
  }, []);

  return (
    <Container>
      <SubContainer>
        <Logo onClick={() => navigate('/', { replace: true })}>Booking</Logo>
        <NavItems>
          {!isSignedIn && <NavButton onClick={() => navigate('/register')}>Register</NavButton>}
          {!isSignedIn && <NavButton onClick={() => navigate('/signin')}>Sign In</NavButton>}
          {isSignedIn && <NavButton onClick={handleSignout}>Sign Out</NavButton>}
        </NavItems>
      </SubContainer>
    </Container>
  );
};

export default Navbar;
