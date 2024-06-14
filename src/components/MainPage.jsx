import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import { Box, Grid, Container, Typography } from '@mui/material';
import OpacityIcon from '@mui/icons-material/Opacity';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import ScienceIcon from '@mui/icons-material/Science';
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DataCard from './DataCard';
import PumpButton from './PumpButton';  // Import the PumpButton component
import './css/MainPage.css';

const MainPage = () => {
  const [humidity, setHumidity] = useState(80.0);
  const [temperature, setTemperature] = useState(25.0);
  const [ph, setPh] = useState(7.0);
  const [airQuality, setAirQuality] = useState(50);
  const [weather, setWeather] = useState('Güneşli');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'sensorDatas'), (snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        setHumidity(data.humi);
        setTemperature(data.temp);
        setPh(data.ph);
        setAirQuality(data.airQuality);
      });
    });

    // Cleanup the subscription on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <Container className="main-page">
      <Typography variant="h4" gutterBottom color="primary.light">
        Bahçe Optimizasyonu
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <DataCard
            icon={OpacityIcon}
            label="Nem"
            value={`${humidity}%`}
            bgColor="#2c6a4a"
            iconColor="#4caf50"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DataCard
            icon={ThermostatIcon}
            label="Sıcaklık"
            value={`${temperature}°C`}
            bgColor="#2c6a4a"
            iconColor="#4caf50"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DataCard
            icon={ScienceIcon}
            label="pH Değeri"
            value={ph}
            bgColor="#2c6a4a"
            iconColor="#4caf50"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DataCard
            icon={AirIcon}
            label="Hava Kalitesi"
            value={airQuality}
            bgColor="#2c6a4a"
            iconColor="#4caf50"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DataCard
            icon={WbSunnyIcon}
            label="Hava Durumu"
            value={weather}
            bgColor="#2c6a4a"
            iconColor="#4caf50"
          />
        </Grid>
        <Grid item xs={12}>
          <PumpButton />  {/* Add the PumpButton component */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;
