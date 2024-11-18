"use client";
import { useState } from "react";

function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
    },
    paymentMethodId: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      alert("Payment Successful!");
    } else {
      alert("Payment Failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        required
      />
      <input
        name="address.line1"
        placeholder="Address Line 1"
        onChange={handleChange}
        required
      />
      <input
        name="address.line2"
        placeholder="Address Line 2"
        onChange={handleChange}
      />
      <input
        name="address.city"
        placeholder="City"
        onChange={handleChange}
        required
      />
      <input
        name="address.state"
        placeholder="State"
        onChange={handleChange}
        required
      />
      <input
        name="address.postal_code"
        placeholder="Postal Code"
        onChange={handleChange}
        required
      />
      <input
        name="address.country"
        placeholder="Country"
        onChange={handleChange}
        required
      />
    </form>
  );
}

export default CheckoutForm;
