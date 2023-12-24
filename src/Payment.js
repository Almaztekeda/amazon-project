import React, { useEffect, useState } from "react";
import "./Payment.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "axios";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const Navigate = useNavigate();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [Processing, setProccessing] = useState("");

  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios.post(
        `http://localhost:2021/payments/create?total=${getBasketTotal(basket) * 100
        }`
      );
      console.log("jjjjjjj", response);
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);

  const handleSumit = async (event) => {
    event.preventDefault();
    setProccessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        console.log("paymentIntent", paymentIntent);

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProccessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });
        Navigate("/orders");
      });
  };

  const handlechange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout <Link to="/checkout">{basket?.length} items</Link>
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment_address">
            <p>{user?.email}</p>
            <p>146 creek ln</p>
            <p>Houston,Tx</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and Delivery</h3>
          </div>

          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h1>Payment Method</h1>
            <div className="payment_details">
              <form onSubmit={handleSumit}>
                <CardElement onChange={handlechange} />
                <div className="payment_pricecontainer">
                  <CurrencyFormat
                    renderText={(value) => <h3> Order Total: {value} </h3>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={Processing || disabled || succeeded}>
                    <span>{Processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
