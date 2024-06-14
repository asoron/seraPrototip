import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import './css/DataCard.css';

const DataCard = ({ icon: IconComponent, label, value, bgColor, iconColor }) => (
  <Card className="data-card" style={{ backgroundColor: bgColor }}>
    <CardActionArea>
      <CardContent className="data-card-content">
        <IconComponent className="data-card-icon" style={{ color: iconColor }} />
        <div>
          <Typography className="data-card-label" variant="h6">
            {label}
          </Typography>
          <Typography className="data-card-value" variant="body1">
            {value}
          </Typography>
        </div>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default DataCard;
