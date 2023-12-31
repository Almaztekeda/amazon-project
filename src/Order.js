import React from "react";
import "./Order.css";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from './CheckoutProduct';

function Order({ order }) {
  return (
    <div className="order">
      <h3>Order</h3>
      <p>{moment.unix(order.data.created).format("MMM Do YYY, h:ma")}</p>
      <p className="order__id"></p>
      <small>{order.id}</small>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;