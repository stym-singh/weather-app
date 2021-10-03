import React, { useState } from 'react';
import axios from 'axios';
import {
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  VStack,
  SimpleGrid,
  Box,
  Button,
} from '@chakra-ui/react';
import Card from './Card';
import Footer from './Footer';

const Home = () => {
  const [locationName, setLocationName] = useState('');
  const [locationsData, setLocationData] = useState([]);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_APP_ID}&q=${locationName}&units=metric`
      );
      setLocationData((locationsData) => [response.data, ...locationsData]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather();
    setLocationName('');
  };

  return (
    <VStack py="4">
      <Heading as="h1" size="2xl" lineHeight="taller">
        Weather App
      </Heading>
      <Box w={['95%', '90%', '70%', '60%', '40%']}>
        <form onSubmit={handleSubmit}>
          <Stack direction={['column', 'column', 'row']}>
            <InputGroup size="lg">
              <InputLeftAddon children="Location" />
              <Input
                type="text"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                required
                autoFocus
              />
            </InputGroup>
            <Button type="submit" colorScheme="blue" size="lg">
              Get Weather
            </Button>
          </Stack>
        </form>
      </Box>
      <Box w={['95%', '90%', '90%', '80%']}>
        <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing={[5, 5, 10]} mt="5">
          {locationsData.map((locationData) => (
            <Card
              key={locationData.id}
              cityName={locationData.name}
              countryName={locationData.sys.country}
              temp={locationData.main.temp}
              feelsLike={locationData.main.feels_like}
              tempMin={locationData.main.temp_min}
              tempMax={locationData.main.temp_max}
              pressure={locationData.main.pressure}
              humidity={locationData.main.humidity}
              description={locationData.weather[0].description}
              icon={locationData.weather[0].icon}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </VStack>
  );
};

export default Home;
