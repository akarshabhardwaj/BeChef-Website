import { Heading } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const initAdress = {
  house: "",
  colony: "",
  city: "",
  state: "",
  country: "",
  pincode: "",
  landmark: "",
  phone: "",
};

const Address = () => {
  const [address, setAddress] = useState(initAdress);
const nav =  useNavigate()
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.placeholder]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nav("/payment")
  };

  console.log(address);
  return (
    <div>
      <br />
      <Heading>Delivery Address</Heading>
      <form
        id="form"
        onSubmit={handleSubmit}
        style={{ margin: "auto", marginTop: "1.5rem" }}
        action=""
      >
        <div style={{ display: "flex", gap: ".5rem" }}>
          <input
            type="text"
            value={address.house}
            onChange={handleChange}
            placeholder="house"
            required
          />
          <input
            type="text"
            value={address.city}
            onChange={handleChange}
            placeholder="city"
            required
          />
        </div>

        <div style={{ display: "flex", gap: ".5rem" }}>
          <input
            type="text"
            value={address.colony}
            onChange={handleChange}
            placeholder="colony"
            required
          />
          <input
            type="text"
            value={address.state}
            onChange={handleChange}
            placeholder="state"
            required
          />
        </div>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <input
            type="text"
            value={address.country}
            onChange={handleChange}
            placeholder="country"
            required
          />
          <input
            type="text"
            value={address.pincode}
            maxLength={6}
            minLength={6}
            onChange={handleChange}
            placeholder="pincode"
            required
          />
        </div>

        <input
          type="text"
          value={address.landmark}
          onChange={handleChange}
          placeholder="landmark"
          required
        />
        <input
          type="text"
          value={address.phone}
          maxLength={10}
          minLength={10}
          onChange={handleChange}
          placeholder="phone"
          required
        />
        <button ml={0} style={{backgroundColor:"#0f346c"}} size="sm" fontSize="sm">
          use this address
        </button>
      </form><br /><br /><br />
    </div>
  );
};

export default Address;