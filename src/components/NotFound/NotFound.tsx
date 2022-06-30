import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
  ${tw`
    flex
    justify-center
  `}
`;

const Container = styled.div`
  ${tw`
    w-full
    max-w-5xl
    flex
    flex-col
    justify-center
    items-center
    py-20
    gap-4
  `}
`;

const Emoji = styled.div`
  ${tw`
    text-7xl
  `}
`;

const Text = styled.p`
  ${tw`
    text-4xl
    font-bold
  `}
`;

const Button = styled.button`
  ${tw`
    bg-[#0071c2]
    py-4
    px-16
    text-white
    text-xl
    font-bold
    rounded-md
  `}
`;

const NotFound: FC = () => {
  const navigate = useNavigate();
  const handleReturn = useCallback(() => {
    navigate('/', { replace: true });
  }, []);

  return (
    <Section>
      <Container>
        <Emoji>🤯</Emoji>
        <Text>404 Not Found</Text>
        <Button onClick={handleReturn}>Return</Button>
      </Container>
    </Section>
  );
};

export default NotFound;
