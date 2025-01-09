import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const [clientSecret, setClientSecret] = useState(null);

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
                .catch(err => console.error('Error fetching clientSecret:', err));
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements || !clientSecret) {
            console.error('Stripe.js has not loaded or clientSecret is missing');
            return;
        }

        const card = elements.getElement(CardElement);
        if (!card) {
            console.error('CardElement not found');
            return;
        }

        const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (paymentError) {
            console.error('Payment Method Error:', paymentError);
            return;
        }

        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: paymentMethod.id,
        });

        if (confirmError) {
            console.error('Payment Confirmation Error:', confirmError);
        } else if (paymentIntent) {
            console.log('Payment Successful:', paymentIntent);
            // Optionally, show success feedback to the user
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckOutForm;
