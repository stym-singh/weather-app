import React from 'react';
import {
  Box,
  HStack,
  Heading,
  Text,
  Image,
  Spacer,
  Divider,
} from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md';
import { FaTemperatureLow, FaTemperatureHigh } from 'react-icons/fa';
import { RiCloudyFill, RiDropFill } from 'react-icons/ri';
import { IoIosSpeedometer } from 'react-icons/io';

const Card = (props) => {
  const iconURL = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
  const weatherDescription = props.description;
  return (
    <>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="xl">
        <Box p="5">
          <HStack>
            <MdLocationOn />
            <Heading as="h2" size="sm" fontWeight="extrabold">
              {props.cityName}, {props.countryName}
            </Heading>
          </HStack>
          <Text fontSize="sm" color="black.500" pt="4">
            {weatherDescription.toUpperCase()}
          </Text>
          <HStack>
            <Image src={iconURL} alt="weather icon" />
            <Heading as="h3" size="2xl" fontWeight="light" isTruncated>
              {props.temp}°C
            </Heading>
          </HStack>
          <HStack>
            <HStack>
              <FaTemperatureLow />
              <Text fontSize="md">Min:</Text>
              <Text fontSize="md" fontWeight="bold">
                {props.tempMin} °C
              </Text>
            </HStack>
            <Spacer />
            <HStack>
              <FaTemperatureHigh />
              <Text fontSize="md">Max:</Text>
              <Text fontSize="md" fontWeight="bold">
                {props.tempMax} °C
              </Text>
            </HStack>
          </HStack>
          <Divider pt="4" />
          <HStack pt="4">
            <RiCloudyFill />
            <Text fontSize="md">Feels Like</Text>
            <Spacer />
            <Text fontSize="md" fontWeight="bold">
              {props.feelsLike} °C
            </Text>
          </HStack>
          <HStack pt="4">
            <IoIosSpeedometer />
            <Text fontSize="md">Pressure</Text>
            <Spacer />
            <Text fontSize="md" fontWeight="bold">
              {props.pressure} mbar
            </Text>
          </HStack>
          <HStack pt="4">
            <RiDropFill />
            <Text fontSize="md">Humidity</Text>
            <Spacer />
            <Text fontSize="md" fontWeight="bold">
              {props.humidity}%
            </Text>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Card;
