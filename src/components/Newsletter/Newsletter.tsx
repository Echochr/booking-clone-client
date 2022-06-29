import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Section = styled.section`
  ${tw`
    mt-6
    bg-[#00224f]
    flex
    justify-center
    py-12
  `}
`;

const Container = styled.div`
  ${tw`
    w-full
    max-w-5xl
    text-white
    flex
    flex-col
    justify-center
    items-center
  `}
`;

const Title = styled.h4`
  ${tw`
    text-white
    text-xl
    font-semibold
  `}
`;

const Subtitle = styled.p`
  ${tw`
    text-gray-300
  `}
`;

const CTAGroup = styled.div`
  ${tw`
    mt-4
    flex
    flex-col
    gap-2
  `}
`;

const Subgroup = styled.div`
  ${tw`
    flex
    gap-1
  `}

  label {
    ${tw`
      text-sm
    `}
  }
`;

const EmailInput = styled.input`
  ${tw`
    w-80
    rounded-sm
    text-xl
    px-2
    text-gray-500
  `}
`;

const Button = styled.button`
  ${tw`
    py-2
    px-10
    bg-[#0071c2]
    rounded-sm
  `}
`;

const Checkbox = styled.input`
  ${tw`
    self-center
  `}
`;

const Newsletter: FC = () => {
  return (
    <Section>
      <Container>
        <Title>Save time, save money!</Title>
        <Subtitle>Sign up and we&apos;ll send the best deals to you</Subtitle>
        <CTAGroup>
          <Subgroup>
            <EmailInput placeholder="Your email" />
            <Button>Subscribe</Button>
          </Subgroup>
          <Subgroup>
            <Checkbox type="checkbox" id="app" />
            <label htmlFor="app">Send me a link to get the FREE Booking app!</label>
          </Subgroup>
        </CTAGroup>
      </Container>
    </Section>
  );
};

export default Newsletter;
