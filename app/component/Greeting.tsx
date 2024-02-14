import React from 'react';

const Greeting = () => {
  const hours = new Date().getHours();
  let greeting;

  // Determine the time of day
  if (hours < 12) {
    greeting = 'Good Morning';
  } else if (hours >= 12 && hours < 17) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  // Render the greeting
  return <>{greeting}</>;
};

export default Greeting;
