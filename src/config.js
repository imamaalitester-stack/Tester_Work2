const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

if (!STRIPE_SECRET_KEY) {
  throw new Error(
    "Missing required environment variable: STRIPE_SECRET_KEY"
  );
}

module.exports = { STRIPE_SECRET_KEY };
