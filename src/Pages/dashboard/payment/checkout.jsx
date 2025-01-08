import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Payment from "./payment";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault()
        
    if (!stripe || !elements) {
        return
    }
    const card = elements.getElement(CardElement)
    if (card === null) {
        return
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }
    }
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
            //   <Payment></Payment>
            ></CardElement>
            <button className="btn btn-primary" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    )
}
export default CheckOutForm