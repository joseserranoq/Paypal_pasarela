import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Checkout } from '../Checkout';

export const About = () => {
  const cliend_id = import.meta.env.VITE_CLIENT_ID;
  // Ensure the environment variable is prefixed with REACT_APP_
  const initialOptions = {
    clientId: cliend_id,
    currency: "USD",
    intent: "capture",
  };

  return (
    <div className="App">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons />
      </PayPalScriptProvider>
    </div>
  );
};
