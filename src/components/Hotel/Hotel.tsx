import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { differenceInDays } from 'date-fns'
import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';
import GalleryImages from '../../constants/HotelPhotos';
import { getHotelById } from '../../services/ApiService';
import NotFound from '../NotFound';

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
    my-6
  `}
`;

const TopSection = styled.div`
  ${tw`
    flex
    justify-between
    items-start
    gap-4
  `}
`;

const HotelInfo = styled.div`
  ${tw`
    w-3/5
    flex
    flex-col
    gap-2
  `}
`;

const HotelName = styled.h1`
  ${tw`
    font-bold
    text-2xl
  `}
`;

const Address = styled.span`
  ${tw`
    flex
    items-center
    text-sm
    gap-2.5
  `}
`;

const Location = styled.span`
  ${tw`
    text-[#0071c2]
    text-sm
    font-medium
  `}
`;

const Highlight = styled.span`
  ${tw`
    text-green-600
    font-medium
  `}
`;

const CTAButton = styled.button`
  ${tw`
    bg-[#0071c2]
    text-white
    font-bold
    py-2
    px-6
    rounded-md
  `}
`;

const Gallery = styled.div`
  ${tw`
    flex
    flex-wrap
    gap-1
    my-2.5
  `}
`;

const GalleryImage = styled.img`
  ${tw`
    w-[33%]
  `}
`;

const LowerSection = styled.div`
  ${tw`
    flex
    gap-6
    mt-10
  `}
`;

const Description = styled.div`
  ${tw`
    w-3/4
  `}
`;

const Slogan = styled.h2`
  ${tw`
    font-bold
    text-2xl
  `}
`;

const DescriptionText = styled.p`
  ${tw`
    mt-4
    text-sm
  `}
`;

const CTADiv = styled.div`
  ${tw`
    w-1/3
    bg-blue-200
    rounded-sm
    flex
    flex-col
    p-4
    gap-3
  `}
`;

const Hotel: FC = () => {
  const { dateRange } = useSelector((state: RootState) => state.search);
  const daysDifference = differenceInDays(dateRange[0].endDate || new Date(), dateRange[0].startDate || new Date()) || 1;

  const { id } = useParams();
  const { data: hotel, isLoading, error } = useQuery('hotelDetails', () => getHotelById(id as string));

  if (isLoading) {
    return <BeatLoader color="#0071c2" />
  }

  if (error) {
    return <NotFound />;
  }

  return (
    <Section>
      <Container>
        <TopSection>
          <HotelInfo>
            <HotelName>{hotel.name}</HotelName>
            <Address>
              <FontAwesomeIcon icon={faLocationDot} />
              {hotel.address}
            </Address>
            <Location>Excellent location - {hotel.distance}m from center</Location>
            <Highlight>Book a stay over ${hotel.cheapestPrice} at this property and get a free airport taxi</Highlight>
          </HotelInfo>
          <CTAButton>Reserve or Book Now!</CTAButton>
        </TopSection>
        <Gallery>
          {GalleryImages.map((image, idx) => <GalleryImage src={image.src} key={idx} />)}
        </Gallery>
        <LowerSection>
          <Description>
            <Slogan>{hotel.description}</Slogan>
            <DescriptionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, maiores commodi corrupti veniam maxime sapiente eius itaque inventore ipsum, eos, quidem voluptatibus cumque amet repellendus? Totam earum dolores ratione culpa.
              Cumque ad autem deleniti nihil rerum minus esse officia velit voluptate praesentium aperiam dolor enim provident quaerat ratione, odit a eos doloribus quibusdam accusamus veniam eaque sequi obcaecati. Eligendi, laboriosam!
              Delectus voluptates necessitatibus, ea sit totam vitae? Nobis molestias dolorum vel, eius et, est soluta placeat ratione nihil iure sit suscipit, optio eveniet adipisci quaerat aut consequuntur eos. Alias, quidem?
            </DescriptionText>
          </Description>
          <CTADiv>
            <span className="font-extrabold text-lg text-gray-700">Perfect for a {daysDifference}-night stay!</span>
            <p className="text-sm text-gray-600">{hotel.description}, this property has a great rating of {hotel.rating}</p>
            <p className="text-xl"><span className="font-extrabold">${hotel.cheapestPrice * daysDifference}</span>&emsp;<small>{daysDifference} night(s)</small></p>
            <CTAButton>Reserve or Book Now!</CTAButton>
          </CTADiv>
        </LowerSection>
      </Container>
    </Section>
  );
};

export default Hotel;
