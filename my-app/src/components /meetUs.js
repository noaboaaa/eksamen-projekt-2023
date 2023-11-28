import React, { useState, useEffect } from "react";

// Mock data for barbers
const mockBarbers = [
  {
    id: 1,
    name: "John Doe",
    bio: "Expert in modern styles. Over 10 years of experience.",
    photoUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    bio: "Specializes in classic cuts and beard trimming.",
    photoUrl: "https://via.placeholder.com/150",
  },
  // Add more mock barbers as needed
];

const MeetUs = () => {
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    setBarbers(mockBarbers); // Using mock data
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      {barbers.map((barber) => (
        <div key={barber.id}>
          <img
            src={barber.photoUrl}
            alt={barber.name}
            style={{ width: "100%", height: "auto" }}
          />
          <h3>{barber.name}</h3>
          <p>{barber.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default MeetUs;
