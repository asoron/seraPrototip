import React, { useState, useRef } from 'react';
import { db } from '../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import { Button } from '@mui/material';
import './css/PumpButton.css';

const PumpButton = () => {
  const docId = 'TXCSJbJxCElcrCGtVpnA';

  const [isPressed, setIsPressed] = useState(false);
  const timeoutRef = useRef(null);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const { left, top } = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - left - radius}px`;
    circle.style.top = `${event.clientY - top - radius}px`;
    circle.classList.add("effect");
    const ripple = button.getElementsByClassName("effect")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  const handleMouseDown = async (event) => {
    createRipple(event);
    setIsPressed(true);
    clearTimeout(timeoutRef.current);
    await updateDoc(doc(db, 'sensorDatas', docId), { pump: true });
  };

  const handleMouseUp = async () => {
    setIsPressed(false);
    timeoutRef.current = setTimeout(async () => {
      await updateDoc(doc(db, 'sensorDatas', docId), { pump: false });
    }, 1000);
  };

  const handleMouseLeave = async () => {
    if (isPressed) {
      setIsPressed(false);
      await updateDoc(doc(db, 'sensorDatas', docId), { pump: false });
    }
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      className={`pump-button ${isPressed ? 'pressed' : ''}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchCancel={handleMouseLeave}
    >
      Pompa
    </Button>
  );
};

export default PumpButton;
    