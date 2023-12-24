const functions = require("firebase-functions");

// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")(
//   "sk_test_51MLSRBHDG20hmXZIPCteXdwKKrJTnIkQvWGHWuNbk0bykVqM4VLPpA0h3G2ZwGQLMi4DNifGQAwclPhVatP4wadv00q8i9rnj7"
// );

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OOlLOLkmcHudYaF4Nonocb3XBwXTdwRKtvHrkQBziWtao0DZ63hF5Gme4sjptQ5fwYVWCsWWfZohF5k5Kx9Zv5J001a9Yp9k0"
);



// - App config
const app = express();
app.listen(2021, (err) => {
  if (err) console.log("error on connection ", err);
  else {
    console.log("Server is connected @ 2021");
  }
});
// - Middlewears
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  try {
    console.log("Payment Request Recieved for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // - Subunits of the currency
      currency: "usd",
    });

    // Ok - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log("error", error);
  }
});

// // - Listen Command

// exports.api = functions.https.onRequest(app);
