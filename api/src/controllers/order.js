const Stripe = require('stripe');

const stripe = new Stripe("sk_test_51NB6jDKYeZyt0ZZhGa3PlEFEsP7hbxWJxmGkH58dP07lj2FAoSj4n11SZWIH2Z1OMt3Z6HXY9IMqGJTNZn1PqNO300IIBJehpm");


const order = async (req, res) => {
 
  const { id, amount } = req.body;
  

  console.log(req.body);

  try {
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'MoviePrime',
      payment_method: id,
      confirm: true,
    });
   
    res.status(200).json(paymentIntent)
  } catch (error) {
  
    res.status(500).json({ message:error });
  }
};

module.exports = order;
