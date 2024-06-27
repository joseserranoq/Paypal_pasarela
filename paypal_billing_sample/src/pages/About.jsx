import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export const About = () => {
  
    const initialOptions = {
      clientId: 'Aa2vQLMVpJE_Mvq3D1iaOv72Nm2mc5FiXgIyGxJhHHkLCLwQ9pB1pq_b6hfBVaGTyoRW_zfnEy5mTXxS',
      // Add other options as needed
    };
    return (
      <>
        <div className="App">           
          <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons />
          </PayPalScriptProvider>
        </div>
      </>
    )
    }
