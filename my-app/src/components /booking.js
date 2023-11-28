import React, { useState } from "react";

const Booking = () => {
  const [bookingInfo, setBookingInfo] = useState({
    barber: "",
    service: "",
    date: "",
    time: "",
    customerName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send bookingInfo to backend
    console.log(bookingInfo);
  };

  const handleChange = (e) => {
    setBookingInfo({ ...bookingInfo, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Barber:
        <select
          name="barber"
          onChange={handleChange}
          value={bookingInfo.barber}
        >
          <option value="">Select a Barber</option>
          {/* Populate with barbers */}
        </select>
      </label>
      <label>
        Service:
        <select
          name="service"
          onChange={handleChange}
          value={bookingInfo.service}
        >
          <option value="">Select a Service</option>
          {/* Populate with services */}
        </select>
      </label>
      {/* Add fields for date, time, customerName, email, and phone */}
      <button type="submit">Book Now</button>
    </form>
  );
};

export default Booking;
