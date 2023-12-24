
import "./App.css";
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from "./Payment";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Orders from "./Orders";
import React, { useEffect } from 'react';

const stripePromise = loadStripe(
  'pk_test_51OOlLOLkmcHudYaFKvd13UcPJf1iEaSTuio7MK5KwgoAwjFw9UvkLLlwx2afveNpJNJqBGRjqMfYD9mRqEr2f0Ae0005m2sg25'
)



function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe(); 
    };
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/orders" element={<Orders />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




