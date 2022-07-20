import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';

import { IHotel } from '../../interface/hotels.interface';
import { createNewProperty } from '../../services/ApiService';

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
    flex-col
    justify-center
    items-center
    gap-4
  `}
`;

const Form = styled.form`
  ${tw`
    w-2/3
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

const Select = styled.select`
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

    disabled:bg-slate-500
    disabled:cursor-not-allowed
  `}
`;

const NewProperty: FC = () => {
  const { register, handleSubmit } = useForm<IHotel>();
  const { isLoading, mutate } = useMutation(createNewProperty, {
    onSuccess: () => {
      toast.success('New property added successfully', { position: 'bottom-right' });
    },
    onError: (err: any) => {
      const { message } = err.response.data;
      toast.error(message || 'Something went wrong', { position: 'bottom-right' });
    },
  });

  const onSubmit: SubmitHandler<IHotel> = useCallback((hotel) => {
    const hotelDto: IHotel = {
      ...hotel,
      distance: Number(hotel.distance),
      cheapestPrice: Number(hotel.cheapestPrice),
      rating: Number(hotel.rating),
    };

    mutate(hotelDto);
  }, []);

  return (
    <Section>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Text>New Property</Text>
          <div>
            <label htmlFor="name">Name</label>
            <TextField id="name" placeholder="Hotel Name" {...register('name')} required />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <TextField
              id="description"
              placeholder="Description"
              {...register('description')}
              required
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <TextField id="city" placeholder="City" {...register('city')} required />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <TextField
              type="address"
              id="address"
              placeholder="Address"
              {...register('address')}
              required
            />
          </div>
          <div>
            <label htmlFor="type">Type</label>
            <Select id="type" {...register('type')}>
              <option value="Hotel">Hotel</option>
              <option value="Apartment">Apartment</option>
              <option value="Resort">Resort</option>
              <option value="Villas">Villas</option>
            </Select>
          </div>
          <div>
            <label htmlFor="distance">Distance</label>
            <TextField
              type="number"
              id="distance"
              placeholder="Distance"
              min="1"
              required
              {...register('distance')}
            />
          </div>
          <div>
            <label htmlFor="cheapestPrice">Cheapest Price</label>
            <TextField
              type="number"
              id="cheapestPrice"
              placeholder="Cheapest Price"
              min="1"
              required
              {...register('cheapestPrice')}
            />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <TextField
              type="double"
              id="rating"
              placeholder="Rating"
              min="0"
              required
              {...register('rating')}
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <BeatLoader size="5px" color="#fff" /> : 'Submit'}
          </Button>
        </Form>
      </Container>
    </Section>
  );
};

export default NewProperty;
