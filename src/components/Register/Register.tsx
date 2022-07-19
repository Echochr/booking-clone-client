import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate, Navigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

import { AppDispatch, RootState } from '../../app/store';
import { IUser } from '../../providers/auth/AuthContext';
import { registerNewUser, resetHelperStates } from '../../features/auth/authSlice';

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
    justify-center
    gap-4
  `}
`;

const Form = styled.form`
  ${tw`
    w-1/2
    flex
    flex-col
    gap-4
    p-8
    rounded-md
    bg-[#febb02]
  `}
`;

const Text = styled.h2`
  ${tw`
    text-2xl
    font-bold
  `}
`;

const TextField = styled.input`
  ${tw`
    w-full
    rounded-sm
    text-xl
    p-2
    mt-0.5
    border-2
    border-[#0071c2]
    text-gray-700
  `}
`;

const Button = styled.button`
  ${tw`
    w-full
    text-center
    text-white
    font-semibold
    rounded-sm
    py-2.5
    bg-[#0071c2]
  `}
`;

const Signin: FC = () => {
  const { register, handleSubmit } = useForm<IUser>();

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit: SubmitHandler<IUser> = useCallback(async (user) => {
    const { payload, type } = await dispatch(registerNewUser(user));

    if (/rejected$/.test(type)) {
      toast.error(payload as string, { position: 'bottom-right' });
      dispatch(resetHelperStates());
    }
    if (/fulfilled$/.test(type)) {
      toast.success('Registered successfully', { position: 'bottom-right' });
      navigate('/signin', { replace: true });
    }
  }, []);

  const { isSignedIn, isLoading } = useSelector((state: RootState) => state.auth);
  if (isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <Section>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Text>Register</Text>
          <div>
            <label htmlFor="email">Email</label>
            <TextField type="email" placeholder="Email" {...register('email')} required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <TextField type="password" placeholder="Password" {...register('password')} required />
          </div>
          <Button type="submit">{isLoading ? <BeatLoader size="5px" color="#fff" /> : 'Register'}</Button>
        </Form>
      </Container>
    </Section>
  );
};

export default Signin;
