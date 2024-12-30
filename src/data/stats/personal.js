import React, { useState, useEffect } from 'react';

// Corrected Age component
const Age = () => {
  const [calculatedAge, setCalculatedAge] = useState();

  const tick = () => {
    const today = new Date();
    const birthDate = new Date('2001-06-22');
    let age = today.getFullYear() - birthDate.getFullYear();

    const y = today.getMonth() > birthDate.getMonth();
    const x = (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    const hasBirthdayPassed = y || x;
    if (!hasBirthdayPassed) {
      age -= 1;
    }

    setCalculatedAge(age);
  };

  useEffect(() => {
    tick();
  }, []);

  return <>{calculatedAge}</>;
};

// Data array
const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  // {
  //   key: 'countries',
  //   label: 'Countries visited',
  //   value: 53,
  //   link: 'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
  // },
  {
    key: 'location',
    label: 'Current city',
    value: 'Magdeburg, Germany',
  },
];

export default data;
