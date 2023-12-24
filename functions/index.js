require("dotenv").config();

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY); // secret key

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  try {
    console.log("payment Request Recived for this amount>>>", total);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(total),
      currency: "USD",
    });
    //ok-created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    response.status(500).send("server error");
    console.log(error);
  }
});
app.listen(10000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("listenig 10000");
  }
});









// sk_test_51OOlLOLkmcHudYaF4Nonocb3XBwXTdwRKtvHrkQBziWtao0DZ63hF5Gme4sjptQ5fwYVWCsWWfZohF5k5Kx9Zv5J001a9Yp9k0