const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = (app) => {
  app.post("/api/stripe", async (req, res) => {
    // console.log(req.body, "body");
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "5 dollars",
      source: req.body.id,
    });
    console.log(charge, "charge");
  });
};
